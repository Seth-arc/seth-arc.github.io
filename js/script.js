// =====================================================
// PROJECT DATA
// =====================================================

const projectData = {
    'echo-chamber': {
        number: '01',
        title: 'ECHO CHAMBER',
        subtitle: 'Critical Thinking Game',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://seth-arc.github.io/echochamber/" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Echo Chamber is a web-based critical thinking game designed to train intellectual self-defense against cognitive manipulation. In an age of misinformation and persuasive misdirection, this platform helps users recognize how emotional appeals and logical fallacies bypass critical evaluation. The game presents various logical fallacies disguised as compelling arguments, challenging users to identify and resist them through a "cognitive shield" system.</p>
            <p style="margin-top: 1rem;">The platform tracks performance metrics across multiple levels, gamifying the learning experience while maintaining pedagogical coherence. By the end of the training sequence, users develop an intuitive awareness of manipulation techniques and build a practical cognitive immune system against misinformation in their daily media consumption.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the designer, I created an immersive experience that transforms abstract critical thinking concepts into tangible gameplay mechanics. The game architecture uses a state machine to manage progression through increasingly challenging training phases, with each level introducing new fallacy types and complexity layers. The visual design employs a "shield" metaphor that makes cognitive defense both literal and memorable.</p>
            <p style="margin-top: 1rem;">The pedagogical strategy centers on immediate feedback and spaced repetition—core principles from cognitive science research. Custom canvas-based rendering creates visual effects that celebrate correct identifications while providing constructive guidance on errors. A hierarchical fallacy taxonomy with difficulty ratings ensures appropriate challenge progression.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>HTML5, CSS3, Vanilla JavaScript (ES6+), Canvas API, LocalStorage</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Frontend:</strong> Pure HTML5, CSS3 with advanced animations, Vanilla JavaScript (ES6+)</li>
                <li><strong>Architecture:</strong> State machine managing progression through training phases</li>
                <li><strong>Game Engine:</strong> Custom canvas-based rendering for visual effects and particle systems</li>
                <li><strong>Data Structure:</strong> Hierarchical fallacy taxonomy with difficulty ratings and exemplars</li>
                <li><strong>Performance Tracking:</strong> Local storage persistence for progress metrics and achievement systems</li>
                <li><strong>Accessibility:</strong> Keyboard navigation support, screen reader compatible semantic HTML</li>
            </ul>
        `,
        liveLink: 'https://seth-arc.github.io/echochamber/'
    },
    'anga': {
        number: '02',
        title: 'ANGA',
        subtitle: 'Teaching Style Assessment',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://seth-arc.github.io/Anga-v1/" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Anga is a web-based teaching style assessment tool that makes implicit pedagogical orientations visible and actionable. Most educators rarely examine their teaching approach systematically—Anga addresses this gap through an evidence-based self-assessment based on the Staffordshire Evaluation of Teaching Styles (SETS) framework.</p>
            <p style="margin-top: 1rem;">The 24-question assessment captures nuanced responses along a spectrum, avoiding false dichotomies of traditional multiple-choice formats. Results frame strengths, trade-offs, and practical growth paths without judgment, helping educators understand their natural teaching inclinations and make informed decisions about professional development.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the designer and developer, I created a clean, professional interface that prioritizes self-reflection over performance anxiety. The assessment uses custom range sliders rather than binary choices, acknowledging that teaching styles exist on continuums. Real-time progress indicators maintain engagement without creating pressure, while the minimal aesthetic keeps attention on the introspective process.</p>
            <p style="margin-top: 1rem;">The results visualization employs canvas-based radar charts to present multi-dimensional style profiles at a glance. Dynamic content assembly generates personalized feedback based on assessment scores, with PDF export capability for portfolio documentation. The entire experience is designed to be respectful of educators' time while providing meaningful insights.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>HTML5, CSS3, JavaScript, Canvas API, PDF Generation Library</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Assessment Engine:</strong> SETS framework implementation with scoring algorithms</li>
                <li><strong>Frontend:</strong> Responsive HTML5/CSS3 with custom range slider components</li>
                <li><strong>Data Visualization:</strong> Canvas-based radar charts for multi-dimensional style profiles</li>
                <li><strong>State Management:</strong> Progressive disclosure design with answer persistence</li>
                <li><strong>Results Generation:</strong> Dynamic content assembly based on assessment scores</li>
                <li><strong>Export Capability:</strong> PDF generation for professional portfolio documentation</li>
            </ul>
        `,
        liveLink: 'https://seth-arc.github.io/Anga-v1/'
    },
    'bubbles': {
        number: '03',
        title: 'BUBBLES',
        subtitle: 'Physics-Based Learning Game',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://seth-arc.github.io/Bubbles/" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Bubbles is a physics-based puzzle game that transforms critical thinking concepts into playful learning experiences for children ages 4-12. Critical thinking vocabulary—clarity, accuracy, relevance, logic, and more—typically arrives late in curricula, often at the high school or college level. This game brings these foundational concepts early, making them accessible through intuitive gameplay.</p>
            <p style="margin-top: 1rem;">The interface uses color-coded bubbles representing different intellectual standards. Players drag and release bubbles to launch them through obstacle courses, internalizing critical thinking vocabulary through repeated positive interactions. Each successful level provides immediate feedback celebrating the intellectual standard used, creating positive associations with complex cognitive concepts.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the game designer and developer, I employed embodied cognition principles—the idea that physical interaction strengthens conceptual understanding. The physics engine creates satisfying tactile feedback through realistic collision detection and bounce mechanics. Touch-optimized controls ensure tablet gameplay feels natural for young learners.</p>
            <p style="margin-top: 1rem;">The level design follows a carefully scaffolded progression, with JSON-based configuration allowing easy content expansion. Particle effects and celebration animations reward success without overwhelming the core learning objectives. LocalStorage persistence tracks completed levels and earned stars, maintaining motivation across sessions.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>HTML5 Canvas, JavaScript, Matter.js (Physics Engine), LocalStorage</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Physics Engine:</strong> Custom Matter.js implementation for realistic collision detection</li>
                <li><strong>Rendering:</strong> HTML5 Canvas with optimized requestAnimationFrame loops</li>
                <li><strong>Level Design:</strong> JSON-based level configuration system for easy content expansion</li>
                <li><strong>Animation System:</strong> Particle effects and celebration animations using canvas compositing</li>
                <li><strong>Progression Tracking:</strong> localStorage persistence for completed levels and earned stars</li>
                <li><strong>Responsive Design:</strong> Touch-optimized controls for tablet gameplay</li>
            </ul>
        `,
        liveLink: 'https://seth-arc.github.io/Bubbles/'
    },
    'data-command': {
        number: '04',
        title: 'DATA COMMAND',
        subtitle: 'Data-Driven Decision Scenario',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://www.canva.com/design/DAGFZ5tXqt4/uwQP_CBzlNohRCIGhhxRRw/view?embed" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="fullscreen"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Data Command is an immersive simulation built for the 2024 Mandela Washington Fellowship that transforms data-driven governance into an embodied experience of trade-offs, time pressure, and stakeholder negotiation. The simulation immerses participants in Firania, a fictional nation facing complex development challenges, complete with real datasets, policy briefs, and detailed stakeholder profiles.</p>
            <p style="margin-top: 1rem;">Participants assume roles as government officials, NGO representatives, or community leaders, each with distinct priorities and constraints. The scenario unfolds through multiple rounds, with crisis events introducing urgency and forcing rapid adaptation. The goal isn't finding "right answers" but practicing disciplined reasoning in complex, contested reality.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the lead designer and facilitator, I created an authentic decision-making environment using adapted development finance datasets and carefully crafted role cards that balance competing interests. The facilitation framework employs structured timing protocols with crisis event triggers that maintain urgency without overwhelming participants.</p>
            <p style="margin-top: 1rem;">The pedagogical strategy centers on experiential learning through constrained choice. Assessment rubrics evaluate analytical quality, strategic thinking, and collaboration rather than predetermined outcomes. Guided reflection questions in the debrief protocol help participants extract transferable insights about data-driven decision-making in contested contexts.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>Canva, Real Development Finance Datasets, Facilitation Protocols</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Simulation Engine:</strong> Canva-based presentation system with embedded interactive elements</li>
                <li><strong>Data Integration:</strong> Real development finance datasets adapted for scenario context</li>
                <li><strong>Facilitation Framework:</strong> Structured timing protocols with crisis event triggers</li>
                <li><strong>Stakeholder Modeling:</strong> Role cards defining objectives, constraints, and hidden information</li>
                <li><strong>Assessment Tools:</strong> Rubrics evaluating analytical quality, strategic thinking, and collaboration</li>
                <li><strong>Debrief Protocol:</strong> Guided reflection questions targeting specific learning objectives</li>
            </ul>
        `,
        liveLink: 'https://www.canva.com/design/DAGFZ5tXqt4/uwQP_CBzlNohRCIGhhxRRw/view'
    },
    'aidcraft': {
        number: '05',
        title: 'AIDCRAFT',
        subtitle: 'Development Finance Simulation',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://drive.google.com/file/d/1d4Zm-h_WTvmmaaMfawAtiQdgMcFlTphw/preview" 
                    width="100%" 
                    height="480px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>AidCraft is a web-based simulation that compresses years of development finance experience into hours of decision-making practice. The simulation presents learners with a sophisticated dashboard for managing international infrastructure projects, combining economic profiles, stakeholder analysis tools, and negotiation frameworks—all the information real development finance professionals use, maintained in an intuitive interface.</p>
            <p style="margin-top: 1rem;">Users progress through phases of increasing complexity: starting with project selection and economic analysis, advancing through stakeholder management, and culminating in complex multi-party negotiations. Real-time feedback helps learners understand how their choices impact project viability, stakeholder satisfaction, and strategic positioning.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the simulation designer and developer, I built realistic economic profiles based on World Bank and AidData research, ensuring authentic decision contexts. The state machine architecture manages progression through distinct phases, with branching logic creating unique gameplay experiences based on user choices.</p>
            <p style="margin-top: 1rem;">The scoring algorithm evaluates decisions across multiple dimensions—financial viability, political feasibility, and strategic impact—mirroring the complex trade-offs development finance professionals navigate. Context-aware feedback adapts to user performance patterns, providing targeted guidance without prescribing predetermined solutions.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>JavaScript, Custom Dashboard UI, Data Visualization Libraries, World Bank/AidData Datasets</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Architecture:</strong> Web-based simulation with state machine managing progression</li>
                <li><strong>Data Systems:</strong> Realistic economic profiles based on World Bank and AidData research</li>
                <li><strong>UI Framework:</strong> Custom dashboard components with data visualization libraries</li>
                <li><strong>Scoring Algorithm:</strong> Multi-dimensional evaluation considering financial, political, and strategic factors</li>
                <li><strong>Branching Logic:</strong> Decision trees creating unique gameplay experiences based on choices</li>
                <li><strong>Feedback System:</strong> Context-aware guidance adapting to user performance patterns</li>
            </ul>
        `,
        liveLink: 'https://drive.google.com/file/d/10u3roSz2wSqIg_lNWAOcAi7rX--7OU98/view'
    },
    'capital-and-the-other': {
        number: '07',
        title: 'CAPITAL & THE OTHER',
        subtitle: 'Economic Theory Board Game',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://www.youtube.com/embed/rZOJXXX1RI0" 
                    width="100%" 
                    height="480px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Capital & The Other is a physical board game designed for William & Mary's "Economics of Identity" course. The game transforms abstract identity economics theory into felt experience through simple mechanics and asymmetric outcomes. Players navigate an economic system where identity markers—gender, race, class, and other social categories—create measurably different opportunity structures.</p>
            <p style="margin-top: 1rem;">Players draw cards assigning financial events, social capital shifts, and skill developments that affect their resource accumulation and trading opportunities. The game makes visible how structural advantages and disadvantages compound over time, creating economic outcomes that feel both systematic and personally experienced.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the game designer, I created asymmetric gameplay that generates measurable but not deterministic outcomes—players with structural advantages tend to accumulate more resources, but individual choices still matter. The turn-based resource accumulation system uses identity-based modifiers drawn from identity economics research, making theoretical concepts tangible.</p>
            <p style="margin-top: 1rem;">The facilitator guide provides comprehensive debrief protocols connecting gameplay experiences to course readings. Reflective writing prompts help students process the emotional dimensions of experiencing systematic advantage or disadvantage, even in a simplified game context. The design balances playability with pedagogical authenticity.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>Physical Game Design, Identity Economics Research, Facilitation Protocols</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Game Components:</strong> Physical board with resource zones, identity cards, event deck, resource tokens</li>
                <li><strong>Mechanics Design:</strong> Turn-based resource accumulation with identity-based modifiers</li>
                <li><strong>Balancing:</strong> Asymmetric gameplay creating measurable but not deterministic outcomes</li>
                <li><strong>Facilitator Guide:</strong> Comprehensive instructions for debrief discussions and learning objectives</li>
                <li><strong>Scalability:</strong> Supports 4-6 players per game board with classroom facilitation</li>
                <li><strong>Assessment Integration:</strong> Reflective writing prompts connecting gameplay to course readings</li>
            </ul>
        `,
        liveLink: 'https://sites.google.com/aiddata.wm.edu/capital-and-the-other'
    },
    'data-detectives': {
        number: '08',
        title: 'DATA DETECTIVES',
        subtitle: 'Analysis & Visualization Workshop',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://www.canva.com/design/DAGYM_8H9oo/0NYKfbzhYD0-1ReV0vvlbA/view?embed" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="fullscreen"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Data Detectives is a project-based workshop that reframes data analysis as investigative storytelling. Debuting in Manila with Rappler, this workshop transforms participants into investigative analysts exploring development finance patterns across selected countries from 2000-2021. The workshop provides real AidData datasets and a structured methodology for extracting insights and crafting compelling visual narratives.</p>
            <p style="margin-top: 1rem;">Teams specialize in different thematic areas—Environmental Impact, Social Heritage, Economic Investment, or Infrastructure—diving deep into domain-specific patterns. The workshop culminates in team presentations where participants defend their analytical choices and explain how their visualizations tell stories that matter to real stakeholders.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the workshop designer and facilitator, I created a methodology supporting multiple visualization tools (Excel, Tableau, Flourish, Datawrapper) while maintaining consistent analytical rigor. The curated AidData extracts focus on specific countries and timeframes, reducing dataset complexity without sacrificing authenticity.</p>
            <p style="margin-top: 1rem;">The facilitation framework employs timing protocols and breakout group management strategies that maintain momentum while allowing deep analysis. Assessment rubrics evaluate three dimensions: analytical rigor, visual design quality, and narrative clarity. A resource library provides best practice examples and common pitfall warnings, scaffolding success for participants with varied technical backgrounds.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>Canva, AidData Datasets, Visualization Tools (Excel, Tableau, Flourish, Datawrapper)</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Workshop Framework:</strong> Canva-based presentation system with embedded activity instructions</li>
                <li><strong>Dataset Preparation:</strong> Curated AidData extracts focused on specific countries and timeframes</li>
                <li><strong>Tool Flexibility:</strong> Methodology supports multiple visualization tools (Excel, Tableau, Flourish, Datawrapper)</li>
                <li><strong>Facilitation Guide:</strong> Timing protocols, breakout group management, presentation rubrics</li>
                <li><strong>Assessment Rubric:</strong> Evaluation criteria for analytical rigor, visual design, and narrative clarity</li>
                <li><strong>Resource Library:</strong> Best practice examples and common pitfall warnings</li>
            </ul>
        `,
        liveLink: 'https://www.canva.com/design/DAGYM_8H9oo/0NYKfbzhYD0-1ReV0vvlbA/view'
    },
    'viewpoint': {
        number: '10',
        title: 'VIEWPOINT',
        subtitle: 'Gesture-Based Interface',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://seth-arc.github.io/VIEWPOINT/" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="camera; autoplay"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>VIEWPOINT is an experimental interface exploring embodied interaction for learning. Instead of abstract clicks and taps, users manipulate digital space with hand gestures tracked in real time through camera-based machine learning. The platform demonstrates how embodied cognition principles can transform computer interactions from symbolic to physical.</p>
            <p style="margin-top: 1rem;">The system provides multiple interaction modes: skeleton visualization showing 21 hand landmarks, motion trails creating ephemeral art, heatmaps revealing movement patterns, and physics-based particle effects responding to gestures. A game mode introduces targets to hit with hand movements, adding playful engagement to technical demonstration.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the developer and interaction designer, I implemented MediaPipe's machine learning hand tracking model with a custom gesture.js wrapper, making complex computer vision accessible through simple APIs. The multi-layer canvas rendering pipeline composites effects in real-time while maintaining performance across devices.</p>
            <p style="margin-top: 1rem;">Graceful degradation ensures the interface remains functional even without camera access—mouse control provides fallback interaction. RequestAnimationFrame loops with delta-time calculations optimize performance while custom particle systems and trail rendering create visually compelling feedback. The glassmorphic UI employs CSS blur effects and neon colors inspired by cyberpunk aesthetics.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>MediaPipe Hands ML Model, HTML5 Canvas, JavaScript, Custom Gesture API, CSS3</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Hand Tracking:</strong> MediaPipe Hands ML model with custom gesture.js wrapper</li>
                <li><strong>Rendering Pipeline:</strong> Multi-layer HTML5 Canvas with compositing for effects</li>
                <li><strong>Input Handling:</strong> Fallback to mouse control when camera unavailable</li>
                <li><strong>Visual Effects:</strong> Custom particle systems, trail rendering, heatmap accumulation</li>
                <li><strong>Performance Optimization:</strong> RequestAnimationFrame loops with delta-time calculations</li>
                <li><strong>UI Framework:</strong> Glassmorphic panels with CSS blur effects and neon color scheme</li>
            </ul>
        `,
        liveLink: 'https://seth-arc.github.io/VIEWPOINT/'
    },
    'ocean-simulation': {
        number: '11',
        title: '3D OCEAN',
        subtitle: 'Photorealistic Water Physics',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://seth-arc.github.io/3D-Ocean/simulation.html" 
                    width="100%" 
                    height="600px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                    sandbox="allow-scripts allow-same-origin allow-pointer-lock"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>3D Ocean is a technical demonstration of photorealistic water environments using advanced Three.js and WebGL shader technology. The project creates expansive ocean scenes with dynamic wave generation, realistic reflections, and atmospheric sky rendering that responds to sun positioning. Users can explore these environments through both first-person navigation and orbital camera controls.</p>
            <p style="margin-top: 1rem;">Real-time water physics respond to camera movement, creating ripples and disturbances that demonstrate interactive environmental systems. Performance optimization maintains smooth framerates across devices through adaptive quality scaling, making high-fidelity 3D graphics accessible on varied hardware.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the developer and technical artist, I implemented custom WebGL shaders for water displacement using normal mapping and Fresnel reflections, creating physically-based rendering that responds dynamically to lighting conditions. The procedural sky shader employs atmospheric scattering algorithms, simulating how light interacts with Earth's atmosphere at different times of day.</p>
            <p style="margin-top: 1rem;">Multiple light sources with real-time shadow mapping add depth and realism while LOD (Level of Detail) systems reduce polygon counts for distant objects. Adaptive quality settings adjust rendering complexity based on measured frame rates, ensuring smooth performance. The dual camera system—first-person with mouse look and orbital controls—provides both immersive exploration and cinematic observation.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>Three.js (r128), WebGL Custom Shaders, GLSL, JavaScript</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Rendering Engine:</strong> Three.js (r128) with custom WebGL shaders</li>
                <li><strong>Water System:</strong> Shader-based displacement with normal mapping and Fresnel reflections</li>
                <li><strong>Sky Rendering:</strong> Procedural sky shader with atmospheric scattering algorithms</li>
                <li><strong>Lighting:</strong> Multiple light sources with real-time shadow mapping</li>
                <li><strong>Camera Systems:</strong> First-person controls with mouse look and orbit controls for observation</li>
                <li><strong>Optimization:</strong> LOD systems, adaptive quality settings, and performance monitoring with FPS counter</li>
            </ul>
        `,
        liveLink: 'https://seth-arc.github.io/3D-Ocean/simulation.html'
    },
    'missing-classrooms': {
        number: '06',
        title: 'MISSING CLASSROOMS',
        subtitle: 'Data Journalism Training',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://drive.google.com/file/d/1_Ce4XLbsHVHMxZ2t_s_itByowPUl7xPe/preview" 
                    width="100%" 
                    height="480px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Missing Classrooms is an innovative digital platform addressing educational gaps by providing accessible learning resources for underserved communities. The platform emerged from a critical need to democratize education and make quality learning materials available to communities with limited access to traditional educational infrastructure.</p>
            <p style="margin-top: 1rem;">The platform provides curated educational content with multi-language support, offline access capabilities for low-connectivity areas, and community-driven content contribution systems. It includes progress tracking and certification programs integrated with local organization partnerships. Deployments have surfaced diverse uses—from agricultural training to public health and digital skills—demonstrating the platform's value as infrastructure for lifelong learning.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the platform designer and technical lead, I prioritized offline-first architecture and low bandwidth operation, recognizing that connectivity constraints define the user experience in target communities. The modular content management system supports multi-language content packages, enabling local adaptation without rebuilding core infrastructure.</p>
            <p style="margin-top: 1rem;">Smart synchronization minimizes bandwidth requirements by intelligently caching content and deferring non-essential updates. Built-in assessment and certification systems use local storage, ensuring learners can complete courses and receive credentials even without consistent internet access. Community features like discussion forums and peer learning tools strengthen the social dimension of learning.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>Progressive Web App Technologies, LocalStorage, Offline-First Architecture, Multi-Language CMS</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Architecture:</strong> Progressive Web App with offline-first design</li>
                <li><strong>Content Management:</strong> Modular system supporting multi-language content packages</li>
                <li><strong>Data Sync:</strong> Smart synchronization minimizing bandwidth requirements</li>
                <li><strong>Assessment:</strong> Built-in quiz and certification systems with local storage</li>
                <li><strong>Community Features:</strong> Discussion forums and peer learning tools</li>
                <li><strong>Analytics:</strong> Usage tracking and learning outcome measurement</li>
            </ul>
        `,
        liveLink: 'https://drive.google.com/file/d/1_Ce4XLbsHVHMxZ2t_s_itByowPUl7xPe/preview'
    },
    'umass-boston': {
        number: '09',
        title: 'BEACONFLEX',
        subtitle: 'Faculty Development System',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <iframe 
                    src="https://drive.google.com/file/d/1rorgnhAsUP5F2ommcyKG5eSHv-VJS6zP/preview" 
                    width="100%" 
                    height="480px" 
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                    allow="autoplay"
                ></iframe>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>BeaconFlex is a faculty development workshop series designed to enhance student engagement and faculty efficiency across multiple academic programs at UMass Boston. The system provides an intuitive platform bridging the gap between traditional classroom learning and modern digital education, helping faculty integrate technology meaningfully into their teaching practice.</p>
            <p style="margin-top: 1rem;">The workshop series addresses a common challenge: faculty recognizing the potential of digital tools but lacking clear pathways to implementation. BeaconFlex provides structured support through multiple workshop modules, each focusing on specific aspects of digital pedagogy—from basic LMS functionality to advanced interactive assessment design.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the instructional designer and workshop facilitator, I created a modular curriculum respecting faculty expertise while introducing evidence-based digital pedagogy practices. Each workshop combines conceptual frameworks with hands-on practice, ensuring participants leave with implementable strategies rather than just theoretical knowledge.</p>
            <p style="margin-top: 1rem;">The SCORM-compliant LMS integration ensures compatibility with existing university systems while custom extensions add functionality specific to BeaconFlex needs. Analytics dashboards provide actionable insights for both faculty and administrators, making visible the impact of pedagogical changes. WCAG 2.1 AA compliance ensures all materials remain accessible to diverse learner populations.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>SCORM-Compliant LMS, Custom Analytics Dashboard, Multimedia Editor, WCAG 2.1 AA Standards</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Platform:</strong> SCORM-compliant LMS with custom extensions</li>
                <li><strong>Frontend:</strong> Responsive design supporting desktop, tablet, and mobile devices</li>
                <li><strong>Integration:</strong> API connections with existing university authentication and information systems</li>
                <li><strong>Analytics:</strong> Custom dashboard providing actionable insights for faculty and administrators</li>
                <li><strong>Content Tools:</strong> Rich multimedia editor with template library</li>
                <li><strong>Accessibility:</strong> WCAG 2.1 AA compliance ensuring universal access</li>
            </ul>
        `,
        liveLink: 'https://drive.google.com/file/d/1rorgnhAsUP5F2ommcyKG5eSHv-VJS6zP/preview'
    },
    'module-design-sprints': {
        number: '12',
        title: 'MODULE DESIGN SPRINTS',
        subtitle: 'Instructional Design Workshop',
        visualDemo: `
            <div style="margin-bottom: 1.5rem;">
                <video 
                    width="100%" 
                    height="480px" 
                    controls
                    style="border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; background: #000;"
                >
                    <source src="stuff/module design sprints.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Project Description</h3>
            <p>Module Design Sprints is an intensive workshop series that transforms abstract instructional design theory into hands-on practice. The sprint framework compresses months of iterative course design into focused collaborative sessions where faculty teams move from concept to concrete implementation. Participants work through structured design phases—defining learning outcomes, mapping content sequences, designing assessments, and prototyping interactive elements.</p>
            <p style="margin-top: 1rem;">The process emphasizes backward design, ensuring alignment between objectives and assessments before developing content. Participants leave with concrete course modules ready for implementation, not just planning documents. The collaborative format leverages peer feedback as a quality control mechanism while building community among faculty.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Design Approach</h3>
            <p>As the workshop designer and facilitator, I created structured worksheets and templates guiding participants through each design phase without prescribing predetermined solutions. The multi-day intensive format maintains momentum while allowing deep work on module components. Digital collaboration platforms complement physical design materials, supporting diverse working styles.</p>
            <p style="margin-top: 1rem;">Assessment rubrics provide quality evaluation criteria for module components, ensuring rigor while respecting disciplinary diversity. Low-fidelity prototyping tools enable rapid iteration without technical barriers. The facilitation approach balances structure with flexibility, maintaining focus on evidence-based instructional strategies while honoring faculty autonomy.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1rem; font-weight: 600; letter-spacing: 0.1rem;">Tools Used</h3>
            <p>Design Thinking Frameworks, Backward Design Methodology, Digital Collaboration Platforms, Physical Prototyping Materials</p>
        `,
        technicalDetails: `
            <ul>
                <li><strong>Workshop Framework:</strong> Multi-day intensive design sprint methodology</li>
                <li><strong>Design Templates:</strong> Structured worksheets for learning outcomes, assessments, and activities</li>
                <li><strong>Facilitation Tools:</strong> Digital collaboration platforms and physical design materials</li>
                <li><strong>Assessment Rubrics:</strong> Quality evaluation criteria for module components</li>
                <li><strong>Prototyping Tools:</strong> Low-fidelity mockup materials for rapid iteration</li>
                <li><strong>Documentation:</strong> Comprehensive sprint guides and participant handbooks</li>
            </ul>
        `,
        liveLink: 'stuff/Module Design Sprint 3 - Assessment.pdf'
    }
};
// =====================================================
// THREE.JS WEBGL SCENE
// =====================================================

class WebGLBackground {
    constructor() {
        this.canvas = document.getElementById('webgl-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.clock = new THREE.Clock();
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        
        // Avoid heavy WebGL on small screens or reduced motion
        const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.enabled = !(isSmallScreen || prefersReduced);

        if (this.enabled) {
            this.init();
            this.addEventListeners();
            this.animate();
        } else {
            // Disable canvas interactions to save battery
            if (this.canvas) {
                this.canvas.style.display = 'none';
            }
        }
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        
        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;
        
        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Create particles
        this.createParticles();
        
        // Add subtle ambient light effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        this.scene.add(ambientLight);
    }
    
    createParticles() {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            
            // Position
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;
            
            // Color (subtle white)
            colors[i3] = 1;
            colors[i3 + 1] = 1;
            colors[i3 + 2] = 1;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }
    
    addEventListeners() {
        window.addEventListener('resize', () => this.onResize());
        // Avoid mousemove on touch devices
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onMouseMove(event) {
        this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const elapsedTime = this.clock.getElapsedTime();
        
        // Smooth mouse following
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;
        
        // Rotate particles slowly
        if (this.particles) {
            this.particles.rotation.y = elapsedTime * 0.05;
            this.particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;
            
            // Mouse interaction
            this.particles.rotation.x += this.mouse.y * 0.1;
            this.particles.rotation.y += this.mouse.x * 0.1;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// =====================================================
// LOADING SCREEN
// =====================================================

class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.loadingProgress = document.querySelector('.loading-progress');
        this.hero = document.querySelector('.hero');
        this.progress = 0;
        
        this.simulateLoading();
    }
    
    simulateLoading() {
        const interval = setInterval(() => {
            this.progress += Math.random() * 15;
            
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    this.fadeInHero();
                }, 300);
            }
            
            this.loadingProgress.style.width = `${this.progress}%`;
            
            // Start fading in video background at 80%
            if (this.progress >= 80 && this.hero) {
                this.hero.classList.add('loading-preview');
            }
        }, 200);
    }
    
    fadeInHero() {
        // Hide loading screen
        this.loadingScreen.classList.add('hidden');
        
        // Activate hero with full animation sequence
        setTimeout(() => {
            if (this.hero) {
                this.hero.classList.remove('loading-preview');
                this.hero.classList.add('active');
            }
        }, 400);
    }
}

// =====================================================
// NAVIGATION
// =====================================================

class Navigation {
    constructor() {
        this.nav = document.getElementById('main-nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navLogo = document.querySelector('.nav-logo');
        
        this.init();
    }
    
    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        if (this.navLogo) {
            this.navLogo.addEventListener('click', () => this.scrollToSection('hero'));
        }
        
        this.updateActiveLink();
        window.addEventListener('scroll', () => this.updateActiveLink());
    }
    
    handleNavClick(e) {
        e.preventDefault();
        const sectionId = e.target.getAttribute('data-section');
        this.scrollToSection(sectionId);
    }
    
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    updateActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        const sections = document.querySelectorAll('.section, .hero');
        let currentSection = 'hero';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
}

// =====================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =====================================================

class ScrollAnimations {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -10% 0px'
        };
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, this.observerOptions);
        
        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// =====================================================
// PROJECT MODAL
// =====================================================

class ProjectModal {
    constructor() {
        this.modal = document.getElementById('project-modal');
        this.modalOverlay = this.modal.querySelector('.modal-overlay');
        this.modalClose = this.modal.querySelector('.modal-close');
        this.projectCards = document.querySelectorAll('.project-card');
        
        this.init();
    }
    
    init() {
        this.projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                this.openModal(projectId);
            });
        });
        
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;
        
        // Populate modal content
        this.modal.querySelector('.modal-number').textContent = project.number;
        this.modal.querySelector('.modal-title').textContent = project.title;
        this.modal.querySelector('.modal-subtitle').textContent = project.subtitle;
        
        // Populate visual demo content
        this.modal.querySelector('.visual-demo-content').innerHTML = project.visualDemo;
        
        this.modal.querySelector('.live-link').href = project.liveLink;
        
        // Show modal
        this.modal.classList.add('active');
        document.body.classList.add('modal-open');
        
        // Scroll to top of modal content
        this.modal.querySelector('.modal-container').scrollTop = 0;
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

// =====================================================
// SMOOTH SCROLL
// =====================================================

class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href.length <= 1) return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// =====================================================
// INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    // Ensure page always starts at the top on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // Initialize WebGL background
    const webglBackground = new WebGLBackground();
    
    // Initialize loading screen
    const loadingScreen = new LoadingScreen();
    
    // Initialize navigation
    const navigation = new Navigation();
    
    // Initialize scroll animations
    const scrollAnimations = new ScrollAnimations();
    
    // Initialize project modal
    const projectModal = new ProjectModal();
    
    // Initialize smooth scroll
    const smoothScroll = new SmoothScroll();
    
    // Add scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const philosophySection = document.getElementById('philosophy');
            if (philosophySection) {
                window.scrollTo({
                    top: philosophySection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Force scroll to top right before the page is unloaded/reloaded
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// =====================================================
// HERO PARALLAX & DOLLY-IN
// =====================================================

class HeroParallax {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.titleLines = document.querySelectorAll('.hero .title-line');
        this.words = document.querySelectorAll('.hero .title-line .word');
        this.depths = [40, 20, 10, 60]; // FROM, ABSTRACT, TO, TANGIBLE
        this.mouse = { x: 0, y: 0 };
        this.target = { x: 0, y: 0 };

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
        if (this.titleLines.length && !(prefersReduced || isSmallScreen)) {
            this.initDepths();
            this.bindEvents();
            this.animate();
        }
    }

    initDepths() {
        this.titleLines.forEach((line, i) => {
            const depth = this.depths[i] || 10;
            line.setAttribute('data-depth', depth);
            line.style.transform = 'translate3d(0,0,0)';
        });
    }

    bindEvents() {
        window.addEventListener('mousemove', (e) => {
            this.target.x = (e.clientX / window.innerWidth) * 2 - 1; // -1 .. 1
            this.target.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });
    }

    animate() {
        const raf = () => {
            this.mouse.x += (this.target.x - this.mouse.x) * 0.06;
            this.mouse.y += (this.target.y - this.mouse.y) * 0.06;

            this.titleLines.forEach((line) => {
                const depth = parseFloat(line.getAttribute('data-depth')) || 10;
                const tx = this.mouse.x * depth;
                const ty = this.mouse.y * depth;
                line.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
            });

            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }
}

// Initialize hero parallax once content is ready and hero is active
document.addEventListener('DOMContentLoaded', () => {
    // Delay slightly to allow the hero's slideUp animations to complete
    setTimeout(() => {
        new HeroParallax();
    }, 1200);
});

// =====================================================
// PERFORMANCE OPTIMIZATION
// =====================================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to resize event
window.addEventListener('resize', debounce(() => {
    // Trigger any resize-dependent updates
    console.log('Window resized');
}, 250));
