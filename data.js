const portfolioData = {
    hero: {
        image: "https://z-cdn-media.chatglm.cn/files/a1dfa643-4b54-41cd-b5e2-4c4c6afef2b2.png?auth_key=1879830464-2aef707ed3f4436fb53b7ca5cac76063-0-829314f964dae523e19ceaf37e86bfee",
        imageAlt: "Sajad Ali Tavakoli",
        label: "Backend Developer",
        name: "Sajad Ali<br>Tavakoli",
        role: "Building clean, scalable systems.",
        description:
            "Computer Science graduate and backend developer focused on designing secure, maintainable systems with clean architecture, production-ready workflows, and scalable data modeling.",
        buttons: [
            {
                text: "View Projects",
                link: "#projects",
                type: "primary",
            },
            {
                text: "Contact Me",
                link: "#contact",
                type: "outline",
            },
        ],
    },

    skills: {
        label: "Skills",
        heading: "My Skills",
        items: [
            {
                title: "Backend",
                icon: "server",
                bullets: ["NestJS", "Node.js", "Express.js", "PHP"],
            },
            {
                title: "Database",
                icon: "database",
                bullets: ["Prisma", "MySQL", "PostgreSQL", "Microsoft Access"],
            },
            {
                title: "Auth & Performance",
                icon: "shield-check",
                bullets: ["JWT", "OTP", "MFA", "Redis"],
            },
            {
                title: "Languages",
                icon: "code-2",
                bullets: ["JavaScript", "Python", "Java", "C++"],
            },
            {
                title: "Tools",
                icon: "wrench",
                bullets: ["Git", "VS Code", "Figma", "Bootstrap 5"],
            },
        ],
    },

    projects: {
        label: "Projects",
        heading: "Featured Projects",
        maxVisible: 5,
        items: [
            {
                title: "Deh-Sabz LMS / Land Management System",
                icon: "landmark",
                description:
                    "A production-focused land and ownership management system built with structured backend architecture, authentication, registry workflows, and scalable data modeling.",
                tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "JWT"],
                order: 1,
                github: "",
                gitlab: "",
                demo: "",
            },
            {
                title: "Leitner Learning System",
                icon: "brain",
                description:
                    "A web application based on the Leitner method to help users memorize information more effectively, especially for language learning and structured study.",
                tags: ["Backend Architecture", "Authentication", "Learning System"],
                order: 2,
                github: "",
                gitlab: "",
                demo: "",
            },
            {
                title: "Educational Management System",
                icon: "graduation-cap",
                description:
                    "A database system for managing students, teachers, courses, enrollments, salaries, costs, and reports for an educational center.",
                tags: ["Microsoft Access", "VBA", "Database Design"],
                order: 3,
                github: "",
                gitlab: "",
                demo: "",
            },
            {
                title: "Blog Web Application",
                icon: "pen-line",
                description:
                    "A blog system built with Node.js, Express.js, and EJS, focused on routing, dynamic rendering, and clean UI structure.",
                tags: ["Node.js", "Express.js", "EJS"],
                order: 4,
                github: "",
                gitlab: "",
                demo: "",
            },
            {
                title: "Student Management System",
                icon: "users",
                description:
                    "A PHP and MySQL-based system for managing student records with CRUD operations, validation, and dynamic table display.",
                tags: ["PHP", "MySQL", "JavaScript"],
                order: 5,
                github: "",
                gitlab: "",
                demo: "",
            },
        ],
    },
};
