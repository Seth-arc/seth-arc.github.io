document.querySelectorAll('.mobile-toggle').forEach(button=>{button.addEventListener('click',()=>{const nav=document.getElementById('navigation');const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);});});document.querySelectorAll('#navigation a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('navigation').classList.remove('open');document.querySelector('.mobile-toggle').setAttribute('aria-expanded','false');}));document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('[data-category]').forEach(card=>{const show=button.dataset.filter==='all'||card.dataset.category.split(' ').includes(button.dataset.filter);card.hidden=!show;if(show)count++;});document.getElementById('results').textContent=count+(count===1?' project shown':' projects shown');}));

/* ------------------------------------------------------------------
   Motion layer
   Springs with real mass, stiffness and damping. Every motion answers a
   person's action or clarifies a relationship; nothing loops or decorates.
------------------------------------------------------------------ */
(function(){
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  function motionAllowed(){ return !reduceMotion.matches; }

  /* A small interruptible spring. Retargeting keeps the current velocity,
     so a change of mind mid-motion feels like weight, not a restart. */
  function Spring(value, options, onUpdate){
    options = options || {};
    this.value = value;
    this.target = value;
    this.velocity = 0;
    this.stiffness = options.stiffness || 170;
    this.damping = options.damping || 21;
    this.mass = options.mass || 1;
    this.onUpdate = onUpdate;
    this.onRest = null;
    this.frame = 0;
    this.last = 0;
  }
  Spring.prototype.to = function(target){
    this.target = target;
    if(!motionAllowed()){ this.set(target); return this; }
    if(!this.frame){
      var self = this;
      this.last = performance.now();
      this.frame = requestAnimationFrame(function tick(now){ self.step(now, tick); });
    }
    return this;
  };
  Spring.prototype.set = function(value){
    if(this.frame){ cancelAnimationFrame(this.frame); this.frame = 0; }
    this.value = this.target = value;
    this.velocity = 0;
    this.onUpdate(value);
    if(this.onRest){ this.onRest(value); }
    return this;
  };
  Spring.prototype.step = function(now, tick){
    var elapsed = Math.min((now - this.last) / 1000, 1 / 30);
    this.last = now;
    var substeps = Math.max(1, Math.round(elapsed / (1 / 240)));
    var dt = elapsed / substeps;
    for(var i = 0; i < substeps; i++){
      var force = -this.stiffness * (this.value - this.target) - this.damping * this.velocity;
      this.velocity += (force / this.mass) * dt;
      this.value += this.velocity * dt;
    }
    if(Math.abs(this.velocity) < 0.002 && Math.abs(this.value - this.target) < 0.0005){
      this.frame = 0;
      this.value = this.target;
      this.velocity = 0;
      this.onUpdate(this.value);
      if(this.onRest){ this.onRest(this.value); }
      return;
    }
    this.onUpdate(this.value);
    this.frame = requestAnimationFrame(tick);
  };

  function clamp(v, min, max){ return Math.min(max, Math.max(min, v)); }

  /* External-link arrows become their own element so they can lean toward
     where the link goes, without moving the words around them. */
  document.querySelectorAll('a').forEach(function(a){
    var node = a.lastChild;
    while(node && node.nodeType === 3 && !node.nodeValue.trim()){ node = node.previousSibling; }
    if(node && node.nodeType === 1 && node.tagName === 'H3'){
      a = node;
      node = a.lastChild;
    }
    if(!node || node.nodeType !== 3) return;
    var text = node.nodeValue;
    var index = text.lastIndexOf('↗');
    if(index === -1 || text.slice(index + 1).trim()) return;
    var arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    node.nodeValue = text.slice(0, index);
    node.parentNode.insertBefore(arrow, node.nextSibling);
  });

  /* The header only draws its edge once content is passing beneath it. */
  var header = document.querySelector('header');
  if(header){
    var onScroll = function(){ header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* Navigation: a soft pill travels to whichever item the pointer is
     considering, so the target is always clear before the click. */
  var nav = document.getElementById('navigation');
  if(nav){
    var pill = document.createElement('span');
    pill.className = 'nav-pill';
    pill.setAttribute('aria-hidden', 'true');
    nav.insertBefore(pill, nav.firstChild);
    var pillX = new Spring(0, {stiffness:260, damping:26}, function(v){ pill.style.translate = v + 'px 0'; });
    var pillW = new Spring(0, {stiffness:260, damping:26}, function(v){ pill.style.width = v + 'px'; });
    var pillO = new Spring(0, {stiffness:200, damping:24}, function(v){ pill.style.opacity = clamp(v, 0, 1); });
    var shown = false;
    nav.querySelectorAll('a:not(.nav-contact)').forEach(function(link){
      function move(){
        if(window.matchMedia('(max-width: 700px)').matches) return;
        var x = link.offsetLeft, w = link.offsetWidth;
        if(!shown){ pillX.set(x); pillW.set(w); shown = true; }
        else { pillX.to(x); pillW.to(w); }
        pillO.to(1);
      }
      link.addEventListener('pointerenter', move);
      link.addEventListener('focus', move);
    });
    function hide(){ pillO.to(0); shown = false; }
    nav.addEventListener('pointerleave', hide);
    nav.addEventListener('focusout', function(e){ if(!nav.contains(e.relatedTarget)) hide(); });
  }

  /* Press: controls give slightly under the finger and settle back with
     a small overshoot, like a well-damped physical key. */
  document.querySelectorAll('.btn, .nav-contact, .filters button, .mobile-toggle').forEach(function(el){
    var press = new Spring(1, {stiffness:420, damping:30}, function(v){ el.style.scale = v; });
    el.addEventListener('pointerdown', function(){ press.to(0.97); });
    ['pointerup', 'pointerleave', 'pointercancel', 'blur'].forEach(function(type){
      el.addEventListener(type, function(){ press.to(1); });
    });
  });

  /* Hero: the photograph and its caption are two sheets at different
     depths. They respond to the pointer by different amounts, so the
     layering is felt rather than drawn. */
  var hero = document.querySelector('.hero');
  var photo = hero && hero.querySelector('.hero-visual img');
  var caption = hero && hero.querySelector('.caption');
  if(hero && photo && caption){
    var springs = [
      new Spring(0, {stiffness:120, damping:20}, function(v){ photo.style.translate = v + 'px ' + photoY.value + 'px'; }),
      new Spring(0, {stiffness:150, damping:18}, function(v){ caption.style.translate = v + 'px ' + captionY.value + 'px'; })
    ];
    var photoY = new Spring(0, {stiffness:120, damping:20}, function(v){ photo.style.translate = springs[0].value + 'px ' + v + 'px'; });
    var captionY = new Spring(0, {stiffness:150, damping:18}, function(v){ caption.style.translate = springs[1].value + 'px ' + v + 'px'; });
    hero.addEventListener('pointermove', function(e){
      if(!finePointer.matches || !motionAllowed()) return;
      var r = hero.getBoundingClientRect();
      var nx = (e.clientX - r.left) / r.width - 0.5;
      var ny = (e.clientY - r.top) / r.height - 0.5;
      springs[0].to(nx * 6); photoY.to(ny * 5);
      springs[1].to(nx * 14); captionY.to(ny * 10);
    });
    hero.addEventListener('pointerleave', function(){
      springs[0].to(0); photoY.to(0); springs[1].to(0); captionY.to(0);
    });
  }

  /* Case studies: each one is separated by a rule that draws itself as it
     arrives, aligning the reader before the content asks for attention.
     Only rules still below the fold are prepared, so nothing visible jumps. */
  var cases = document.querySelectorAll('.case');
  if(cases.length && 'IntersectionObserver' in window && motionAllowed()){
    var caseObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.remove('is-pending');
          caseObserver.unobserve(entry.target);
        }
      });
    }, {rootMargin:'0px 0px -12% 0px'});
    cases.forEach(function(item){
      if(item.getBoundingClientRect().top > window.innerHeight * 0.88){
        item.classList.add('is-pending');
        caseObserver.observe(item);
      }
    });
  }

  /* Process: the six steps are a sequence, so a line fills through them
     as the reader moves down the section. */
  document.querySelectorAll('.method').forEach(function(method){
    var steps = Array.prototype.slice.call(method.querySelectorAll('.step'));
    if(!steps.length || !motionAllowed()) return;
    var progress = new Spring(0, {stiffness:90, damping:20}, function(p){
      steps.forEach(function(step, i){
        var fill = clamp(p * steps.length - i, 0, 1);
        step.style.setProperty('--fill', fill.toFixed(4));
        step.classList.toggle('is-reached', fill > 0.6);
      });
    });
    progress.set(0);
    function measure(){
      var r = method.getBoundingClientRect();
      var start = window.innerHeight * 0.85;
      var end = window.innerHeight * 0.35;
      var p = (start - r.top) / ((start - end) + r.height * 0.6);
      progress.to(clamp(p, 0, 1));
    }
    measure();
    window.addEventListener('scroll', measure, {passive:true});
    window.addEventListener('resize', measure);
  });

  /* Details: opening reveals the layer beneath at the speed of a drawer,
     and closing returns it, instead of snapping. */
  document.querySelectorAll('details').forEach(function(details){
    var summary = details.querySelector('summary');
    if(!summary) return;
    var body = document.createElement('div');
    body.className = 'details-body';
    while(summary.nextSibling){ body.appendChild(summary.nextSibling); }
    details.appendChild(body);
    var height = new Spring(details.open ? 1 : 0, {stiffness:210, damping:26}, function(v){
      body.style.height = (v * body.scrollHeight) + 'px';
      body.style.opacity = clamp(v * 1.4 - 0.2, 0, 1);
    });
    summary.addEventListener('click', function(e){
      if(!motionAllowed()) return;
      e.preventDefault();
      if(details.open && height.target === 1){
        height.onRest = function(v){ if(v === 0){ details.open = false; } body.style.height = ''; height.onRest = null; };
        body.style.height = body.scrollHeight + 'px';
        height.value = 1;
        height.to(0);
      } else {
        if(!details.open){ body.style.height = '0px'; body.style.opacity = '0'; }
        details.open = true;
        height.onRest = function(v){ if(v === 1){ body.style.height = ''; } height.onRest = null; };
        height.value = height.value || 0;
        height.to(1);
      }
    });
  });

  /* Video modals: a trigger links to the file itself, so it still works
     without dialog support; where dialogs exist, the video opens over the
     page, and closing it pauses playback and returns focus to the trigger. */
  document.querySelectorAll('[data-video]').forEach(function(trigger){
    var dialog = document.getElementById(trigger.dataset.video);
    if(!dialog || typeof dialog.showModal !== 'function') return;
    var video = dialog.querySelector('video');
    var close = dialog.querySelector('.video-modal-close');
    trigger.addEventListener('click', function(e){
      e.preventDefault();
      dialog.showModal();
      if(video){ var playing = video.play(); if(playing && playing.catch){ playing.catch(function(){}); } }
    });
    if(close){ close.addEventListener('click', function(){ dialog.close(); }); }
    dialog.addEventListener('click', function(e){ if(e.target === dialog){ dialog.close(); } });
    dialog.addEventListener('close', function(){ if(video){ video.pause(); } trigger.focus(); });
  });

  /* Filters: cards that come back into the set settle in, so it is clear
     what the filter added rather than the grid simply changing. */
  document.querySelectorAll('[data-filter]').forEach(function(button){
    button.addEventListener('click', function(){
      if(!motionAllowed()) return;
      document.querySelectorAll('[data-category]').forEach(function(card, i){
        if(card.hidden) return;
        card.classList.remove('is-entering');
        void card.offsetWidth;
        card.style.animationDelay = Math.min(i, 8) * 35 + 'ms';
        card.classList.add('is-entering');
        card.addEventListener('animationend', function done(){
          card.classList.remove('is-entering');
          card.style.animationDelay = '';
          card.removeEventListener('animationend', done);
        });
      });
    });
  });
})();
