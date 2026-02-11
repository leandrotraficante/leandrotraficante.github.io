const translations = {
    en: {
        nav: {
            aboutMe: 'About Me',
            skills: 'Skills',
            education: 'Education',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },
        home: {
            greeting: 'Hi, I\'m <span>Leandro</span>',
            title: 'Backend Developer',
            description: 'I\'m interested in approaching development from a systems and product perspective. I design backend solutions with scalability and real-world usage in mind, while keeping implementation practical and efficient. I value clear structure, separation of concerns, and solid database design. My goal is to build reliable backend systems that support business growth while maintaining development agility.',
            contactMe: 'Contact Me',
            downloadCV: 'Download CV'
        },
        sectionTitles: {
            skills: 'My <span>Skills</span>',
            education: 'My <span>Education</span>',
            experience: 'My <span>Experience</span>',
            projects: 'My <span>Projects</span>',
            contact: 'Get In <span>Touch</span>'
        },
        skills: {
            programming: 'Programming Languages',
            backend: 'Backend Technologies',
            databases: 'Databases',
            tools: 'Tools & Technologies'
        },
        education: {
            studying: 'Currently studying',
            degree: 'University Technical Degree in Programming',
            degreeDesc: 'Technical degree focused on software programming and system development. Covers implementation and development of applications using various programming languages, methodologies, and technologies. Emphasizes collaborative work in development teams and technical documentation.',
            fullstack: 'Full Stack Junior',
            fullstackDesc: 'Full Stack development course with focus on HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
            bootcamp: 'Backend Development Bootcamp',
            bootcampDesc: 'Intensive program covering JavaScript, SQL (MySQL), MongoDB and Node.js. Obtained Backend Developer certification.',
            certs: 'JavaScript & SQL Certifications',
            certsDesc: 'Completed specialized courses in JavaScript and SQL (MySQL) with practical projects and assessments.'
        },
        experience: {
            period: 'September 2025 - Present',
            title: 'Freelance Developer',
            subtitle: 'Personal Projects & Learning',
            description: 'Building enterprise-level backend systems with NestJS and TypeScript. Developing scalable notification engines, API integrations, and robust backend services. Focused on implementing resilience patterns, event-driven architectures, multi-tenant systems, and comprehensive API documentation.'
        },
        projects: {
            notif: {
                title: 'Smart Event-Driven Notification Engine',
                desc: 'Multi-tenant notification system that automatically sends alerts for last-minute availability and opportunity events. Built with <strong>NestJS</strong> and <strong>TypeScript</strong>, uses <strong>PostgreSQL</strong> for data storage, processes notifications asynchronously with <strong>Redis</strong> and <strong>BullMQ</strong>, and supports Email, Push, and WhatsApp channels. Features automatic retry mechanisms, duplicate prevention, resilience patterns, and tenant isolation.'
            },
            flight: {
                title: 'Flights Search Service',
                desc: 'Backend service for flight searches built with <strong>NestJS</strong> and <strong>TypeScript</strong>. Integrates with <strong>Amadeus API</strong> for real-time flight data, uses <strong>Redis</strong> caching for faster repeated searches, and implements resilience patterns with automatic retries and circuit breakers. Includes <strong>OAuth2</strong> authentication, structured logging with <strong>Winston</strong>, and modular architecture.',
                impact: '<strong>Impact:</strong> Reduced response time for repeated identical searches from ~10s to ~300ms (≈97% improvement) and minimized redundant external API calls through a Redis caching layer.'
            },
            medical: {
                title: 'Medical Appointments System',
                desc: 'Medical appointments management system built with <strong>Node.js</strong> and <strong>Express</strong>. Supports role-based access (Admin, Doctor, Patient), appointment scheduling workflows, and structured doctor–patient management. Uses <strong>MongoDB</strong> for data persistence and follows <strong>MVC</strong> architecture.',
                objective: '<strong>Objective:</strong> Design a secure and structured appointment management system with clear role boundaries and maintainable separation of concerns.'
            },
            library: {
                title: 'Personal Library API',
                desc: 'REST API for managing a personal book library built with <strong>Node.js</strong> and <strong>Express</strong>. Includes advanced filtering, pagination, external book import via <strong>Google Books API</strong>, and structured data modeling with <strong>MongoDB</strong> and <strong>Mongoose</strong>.',
                objective: '<strong>Objective:</strong> Build a modular and extensible API with clear separation between business logic and data access, enabling flexible queries and maintainable system evolution.'
            },
            inProgress: 'In Progress',
            viewCode: 'View Code',
            liveDemo: 'Live Demo'
        },
        contact: {
            formTitle: 'Contact Me',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'you@example.com',
            subject: 'Subject',
            subjectPlaceholder: 'What is it about?',
            message: 'Message',
            messagePlaceholder: 'Write your message here...',
            send: 'Send',
            successMsg: 'Message sent successfully',
            errorMsg: 'An error occurred. Please try again.'
        },
        footer: {
            copyright: '© 2026 Leandro Traficante. All rights reserved.'
        },
        common: {
            scrollTopLabel: 'Scroll to top'
        },
        whatsappMsg: 'Hi Leandro, I\'m contacting you from your portfolio'
    },
    es: {
        nav: {
            aboutMe: 'Sobre Mí',
            skills: 'Habilidades',
            education: 'Educación',
            experience: 'Experiencia',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        home: {
            greeting: 'Hola, soy <span>Leandro</span>',
            title: 'Desarrollador Backend',
            description: 'Me interesa abordar el desarrollo desde una perspectiva de sistemas y producto. Diseño soluciones backend pensando en su escalabilidad y uso real, manteniendo la implementación práctica y eficiente. Valoro la estructura clara, la separación de responsabilidades y un diseño de base de datos sólido. Mi objetivo es construir sistemas backend confiables que acompañen el crecimiento del negocio, manteniendo agilidad en el desarrollo.',
            contactMe: 'Contactarme',
            downloadCV: 'Descargar CV'
        },
        sectionTitles: {
            skills: 'Mis <span>Habilidades</span>',
            education: 'Mi <span>Educación</span>',
            experience: 'Mi <span>Experiencia</span>',
            projects: 'Mis <span>Proyectos</span>',
            contact: 'Ponte en <span>Contacto</span>'
        },
        skills: {
            programming: 'Lenguajes de Programación',
            backend: 'Tecnologías Backend',
            databases: 'Bases de Datos',
            tools: 'Herramientas y Tecnologías'
        },
        education: {
            studying: 'Cursando actualmente',
            degree: 'Tecnicatura Universitaria en Programación',
            degreeDesc: 'Título técnico enfocado en programación de software y desarrollo de sistemas. Cubre implementación y desarrollo de aplicaciones usando diversos lenguajes de programación, metodologías y tecnologías. Enfatiza trabajo colaborativo en equipos de desarrollo y documentación técnica.',
            fullstack: 'Full Stack Junior',
            fullstackDesc: 'Curso de desarrollo Full Stack con foco en HTML, CSS, JavaScript, React, Node.js y MongoDB.',
            bootcamp: 'Bootcamp de Desarrollo Backend',
            bootcampDesc: 'Programa intensivo cubriendo JavaScript, SQL (MySQL), MongoDB y Node.js. Obtuve la certificación de Backend Developer.',
            certs: 'Certificaciones JavaScript y SQL',
            certsDesc: 'Cursos especializados en JavaScript y SQL (MySQL) con proyectos prácticos y evaluaciones completados.'
        },
        experience: {
            period: 'Septiembre 2025 - Presente',
            title: 'Desarrollador Freelance',
            subtitle: 'Proyectos Personales y Aprendizaje',
            description: 'Construyendo sistemas backend de nivel empresarial con NestJS y TypeScript. Desarrollando motores de notificaciones escalables, integraciones de API y servicios backend robustos. Enfocado en implementar patrones de resiliencia, arquitecturas orientadas a eventos, sistemas multi-tenant y documentación completa de API.'
        },
        projects: {
            notif: {
                title: 'Motor de Notificaciones por Eventos',
                desc: 'Sistema de notificaciones multi-tenant que envía alertas automáticas por disponibilidad de último momento y eventos de oportunidad. Construido con <strong>NestJS</strong> y <strong>TypeScript</strong>, usa <strong>PostgreSQL</strong> para almacenamiento, procesa notificaciones asincrónicamente con <strong>Redis</strong> y <strong>BullMQ</strong>, y soporta canales de Email, Push y WhatsApp. Incluye mecanismos de reintento automático, prevención de duplicados, patrones de resiliencia y aislamiento de tenants.'
            },
            flight: {
                title: 'Servicio de Búsqueda de Vuelos',
                desc: 'Servicio backend para búsqueda de vuelos construido con <strong>NestJS</strong> y <strong>TypeScript</strong>. Integra <strong>Amadeus API</strong> para datos de vuelos en tiempo real, usa caché <strong>Redis</strong> para búsquedas repetidas más rápidas, e implementa patrones de resiliencia con reintentos automáticos y circuit breakers. Incluye autenticación <strong>OAuth2</strong>, logging estructurado con <strong>Winston</strong> y arquitectura modular.',
                impact: '<strong>Impacto:</strong> Reducción del tiempo de respuesta en búsquedas idénticas repetidas de ~10s a ~300ms (≈97% de mejora) y minimización de llamadas redundantes a la API externa mediante una capa de caché en Redis.'
            },
            medical: {
                title: 'Sistema de Turnos Médicos',
                desc: 'Sistema de gestión de turnos médicos construido con <strong>Node.js</strong> y <strong>Express</strong>. Soporta acceso por roles (Admin, Doctor, Paciente), flujos de agendamiento y gestión estructurada doctor-paciente. Usa <strong>MongoDB</strong> para persistencia de datos y sigue arquitectura <strong>MVC</strong>.',
                objective: '<strong>Objetivo:</strong> Diseñar un sistema de gestión de turnos seguro y estructurado con límites de roles claros y separación de responsabilidades mantenible.'
            },
            library: {
                title: 'API de Biblioteca Personal',
                desc: 'API REST para gestionar una biblioteca personal de libros construida con <strong>Node.js</strong> y <strong>Express</strong>. Incluye filtrado avanzado, paginación, importación externa de libros vía <strong>Google Books API</strong> y modelado de datos estructurado con <strong>MongoDB</strong> y <strong>Mongoose</strong>.',
                objective: '<strong>Objetivo:</strong> Construir una API modular y extensible con separación clara entre lógica de negocio y acceso a datos, permitiendo consultas flexibles y evolución mantenible del sistema.'
            },
            inProgress: 'En Progreso',
            viewCode: 'Ver Código',
            liveDemo: 'Ver Demo'
        },
        contact: {
            formTitle: 'Contáctame',
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            email: 'Email',
            emailPlaceholder: 'tu@ejemplo.com',
            subject: 'Asunto',
            subjectPlaceholder: '¿De qué se trata?',
            message: 'Mensaje',
            messagePlaceholder: 'Escribe tu mensaje aquí...',
            send: 'Enviar',
            successMsg: 'Mensaje enviado correctamente',
            errorMsg: 'Hubo un error. Inténtalo de nuevo.'
        },
        footer: {
            copyright: '© 2026 Leandro Traficante. Todos los derechos reservados.'
        },
        common: {
            scrollTopLabel: 'Ir arriba'
        },
        whatsappMsg: 'Hola Leandro, te contacto desde tu portafolio'
    }
};
