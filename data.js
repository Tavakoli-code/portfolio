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
                links: {
                    github: {
                        url: "https://github.com/your-username/project-name",
                        icon: "github",
                        label: "GitHub",
                    },
                    gitlab: {
                        url: "",
                        icon: "gitlab",
                        label: "GitLab",
                    },
                    demo: {
                        url: "",
                        icon: "external-link",
                        label: "Live Demo",
                    },
                },
            },
            {
                title: "Leitner Learning System",
                icon: "brain",
                description:
                    "A web application based on the Leitner method to help users memorize information more effectively, especially for language learning and structured study.",
                tags: ["Backend Architecture", "Authentication", "Learning System"],
                order: 2,
                links: {
                    github: {
                        url: "",
                        icon: "github",
                        label: "GitHub",
                    },
                    gitlab: {
                        url: "",
                        icon: "gitlab",
                        label: "GitLab",
                    },
                    demo: {
                        url: "",
                        icon: "external-link",
                        label: "Live Demo",
                    },
                },
            },
            {
                title: "Educational Management System",
                icon: "graduation-cap",
                description:
                    "A database system for managing students, teachers, courses, enrollments, salaries, costs, and reports for an educational center.",
                tags: ["Microsoft Access", "VBA", "Database Design"],
                order: 3,
                links: {
                    github: {
                        url: "",
                        icon: "github",
                        label: "GitHub",
                    },
                    gitlab: {
                        url: "",
                        icon: "gitlab",
                        label: "GitLab",
                    },
                    demo: {
                        url: "",
                        icon: "external-link",
                        label: "Live Demo",
                    },
                },
            },
            {
                title: "Blog Web Application",
                icon: "pen-line",
                description:
                    "A blog system built with Node.js, Express.js, and EJS, focused on routing, dynamic rendering, and clean UI structure.",
                tags: ["Node.js", "Express.js", "EJS"],
                order: 4,
                links: {
                    github: {
                        url: "",
                        icon: "github",
                        label: "GitHub",
                    },
                    gitlab: {
                        url: "",
                        icon: "gitlab",
                        label: "GitLab",
                    },
                    demo: {
                        url: "",
                        icon: "external-link",
                        label: "Live Demo",
                    },
                },
            },
            {
                title: "Student Management System",
                icon: "users",
                description:
                    "A PHP and MySQL-based system for managing student records with CRUD operations, validation, and dynamic table display.",
                tags: ["PHP", "MySQL", "JavaScript"],
                links: {
                    github: {
                        url: "",
                        icon: "github",
                        label: "GitHub",
                    },
                    gitlab: {
                        url: "",
                        icon: "gitlab",
                        label: "GitLab",
                    },
                    demo: {
                        url: "",
                        icon: "external-link",
                        label: "Live Demo",
                    },
                },
            },
        ],
    },

    focus: {
        label: "Current Focus",
        heading: "What I'm Focused On",
        items: [
            {
                title: "Clean Architecture",
                icon: "layers",
                description:
                    "Designing systems with clear separation of concerns, modular boundaries, and decisions that remain valid as the codebase grows.",
            },
            {
                title: "Auth & Security",
                icon: "shield-check",
                description:
                    "Implementing JWT, OTP, MFA, and session management patterns that protect data without overcomplicating the user experience.",
            },
            {
                title: "Scalable Data Models",
                icon: "database",
                description:
                    "Building database schemas with Prisma and PostgreSQL that handle complex relationships, migrations, and performance at scale.",
            },
            {
                title: "Performance & Caching",
                icon: "zap",
                description:
                    "Using Redis and optimized query patterns to reduce latency and handle concurrent requests in production environments.",
            },
        ],
    },

    experience: {
        label: "Experience",
        heading: "My Experience",
        items: [
            {
                title: "Backend Developer",
                subtitle: "Deh-Sabz LMS Project",
                date: "2024 — Present",
                sortDate: "2024-01-01",
                description:
                    "Building a production land management system with NestJS, Prisma, PostgreSQL, Redis, and JWT authentication. Designing scalable data models and registry workflows.",
            },
            {
                title: "Full-Stack Developer",
                subtitle: "Freelance Projects",
                date: "2023 — 2024",
                sortDate: "2023-01-01",
                description:
                    "Developed learning systems, blog platforms, and student management tools using Node.js, Express, PHP, and MySQL with a focus on backend architecture.",
            },
            {
                title: "Database Developer",
                subtitle: "Educational Management System",
                date: "2022 — 2023",
                sortDate: "2022-01-01",
                description:
                    "Designed and implemented a comprehensive educational management database using Microsoft Access and VBA, handling students, courses, salaries, and reporting.",
            },
            {
                title: "Computer Science Student",
                subtitle: "University",
                date: "2019 — 2023",
                sortDate: "2019-01-01",
                description:
                    "Studied core CS fundamentals including data structures, algorithms, software engineering, database systems, and object-oriented programming in Java, C++, and Python.",
            },
        ],
    },
};
