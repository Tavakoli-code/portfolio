const portfolioData = {
    en: {
        hero: {
            image: "./assets/images/hero_background.png",
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

        about: {
            label: "About",
            heading: "About Me",
            paragraphs: [
                "I'm a backend engineer focused on building <em>scalable, maintainable systems</em> with clean architecture and production-ready solutions. I enjoy breaking complex problems into clear, manageable steps and designing systems that are secure, modular, and easy to evolve.",
                "With a <strong>Computer Science degree</strong> and hands-on experience in full-stack backend development, I've worked on systems ranging from land management platforms to learning applications and educational management tools.",
                "I prefer <em>step-by-step implementation</em>, separation of concerns, and clear architectural decisions over quick fixes and technical debt. Every line of code should serve the system's clarity, not just its functionality.",
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

        approach: {
            label: "Approach & Goals",
            heading: "My Approach",
            quote: "Backend engineering is not just about writing code — it is about designing systems that remain clear, reliable, and maintainable as they grow.",
            goalsText:
                "My goal is to grow as a backend engineer who designs systems that teams can rely on — systems that are not just functional today, but built to remain clear and maintainable for years.",
            items: [
                {
                    title: "Build Incrementally",
                    subtitle: "",
                    description:
                        "Start with what is necessary. Add complexity only when the system demands it, not when curiosity suggests it.",
                    order: 1,
                },
                {
                    title: "Keep Architecture Clean",
                    subtitle: "",
                    description:
                        "Separation of concerns is not a theory — it is a practice. Every module should have one reason to change.",
                    order: 2,
                },
                {
                    title: "Make Systems Easy to Evolve",
                    subtitle: "",
                    description:
                        "Code is read more than it is written. Prioritize clarity, naming, and structure that a new developer can follow.",
                    order: 3,
                },
            ],
        },

        services: {
            label: "Services",
            heading: "What I Offer",
            items: [
                {
                    title: "Backend System Design",
                    icon: "layout-dashboard",
                    description:
                        "Designing scalable, well-structured backend architectures with clear module boundaries and production-ready patterns.",
                },
                {
                    title: "API Development",
                    icon: "plug",
                    description:
                        "Building RESTful APIs with NestJS or Express.js, including authentication, validation, error handling, and documentation.",
                },
                {
                    title: "Database Design & Optimization",
                    icon: "hard-drive",
                    description:
                        "Creating normalized schemas with Prisma or raw SQL, writing efficient queries, and planning for scale from the start.",
                },
                {
                    title: "Auth & Security Implementation",
                    icon: "lock",
                    description:
                        "Implementing JWT, OTP, MFA, role-based access, and secure session management for production applications.",
                },
            ],
        },

        contact: {
            label: "Contact",
            heading: "Let's build something reliable.",
            description:
                "If you have a project in mind or want to discuss backend architecture, feel free to reach out.",
            links: [
                {
                    label: "Email",
                    url: "mailto:hello@sajadtavakoli.com",
                    icon: "mail",
                    type: "email",
                },
                {
                    label: "GitHub",
                    url: "https://github.com",
                    icon: "github",
                    type: "external",
                },
                {
                    label: "GitLab",
                    url: "https://gitlab.com",
                    icon: "gitlab",
                    type: "external",
                },
                {
                    label: "LinkedIn",
                    url: "https://linkedin.com",
                    icon: "linkedin",
                    type: "external",
                },
                {
                    label: "Resume",
                    url: "#",
                    icon: "file-text",
                    type: "external",
                },
            ],
        },

        footer: {
            text: "© 2026 Sajad Ali Tavakoli",
            highlight: "·",
            role: "Software Engineer",
            links: [
                {
                    label: "Top",
                    url: "#hero",
                    type: "internal",
                },
                {
                    label: "GitHub",
                    url: "https://github.com",
                    type: "external",
                },
                {
                    label: "GitLab",
                    url: "https://gitlab.com",
                    type: "external",
                },
                {
                    label: "LinkedIn",
                    url: "https://linkedin.com",
                    type: "external",
                },
            ],
        },
    },

    fa: {
        hero: {
            image: "./assets/images/hero_background.png",
            imageAlt: "سجاد علی توکلی",
            label: "برنامه‌نویس بک‌اند",
            name: "سجاد علی<br>توکلی",
            role: "ساخت سیستم‌های تمیز، مقیاس‌پذیر و قابل اعتماد.",
            description:
                "فارغ‌التحصیل کمپیوتر ساینس و توسعه‌دهنده بک‌اند با تمرکز بر معماری تمیز، سیستم‌های امن، جریان‌های کاری آماده تولید و مدل‌سازی داده‌های مقیاس‌پذیر.",
            buttons: [
                {
                    text: "دیدن پروژه‌ها",
                    link: "#projects",
                    type: "primary",
                },
                {
                    text: "تماس با من",
                    link: "#contact",
                    type: "outline",
                },
            ],
        },

        about: {
            label: "درباره من",
            heading: "معرفی کوتاه",
            paragraphs: [
                "من یک توسعه‌دهنده بک‌اند هستم که روی ساخت سیستم‌های <em>مقیاس‌پذیر، قابل نگهداری و آماده تولید</em> تمرکز دارد.",
                "با داشتن تحصیلات در رشته کمپیوتر ساینس و تجربه عملی در توسعه سیستم‌ها، روی معماری تمیز، احراز هویت امن، مدل‌سازی دیتابیس و ساخت APIهای قابل اعتماد کار می‌کنم.",
                "روش کاری من مرحله‌به‌مرحله است؛ یعنی مشکلات بزرگ را به بخش‌های کوچک‌تر تقسیم می‌کنم و قبل از پیاده‌سازی، تصمیم‌های معماری را واضح بررسی می‌کنم.",
            ],
        },

        skills: {
            label: "مهارت‌ها",
            heading: "مهارت‌های من",
            items: [
                {
                    title: "بک‌اند",
                    icon: "server",
                    bullets: ["NestJS", "Node.js", "Express.js", "PHP"],
                },
                {
                    title: "دیتابیس",
                    icon: "database",
                    bullets: ["Prisma", "MySQL", "PostgreSQL", "Microsoft Access"],
                },
                {
                    title: "احراز هویت و کارایی",
                    icon: "shield-check",
                    bullets: ["JWT", "OTP", "MFA", "Redis"],
                },
                {
                    title: "زبان‌های برنامه‌نویسی",
                    icon: "code-2",
                    bullets: ["JavaScript", "Python", "Java", "C++"],
                },
                {
                    title: "ابزارها",
                    icon: "wrench",
                    bullets: ["Git", "VS Code", "Figma", "Bootstrap 5"],
                },
            ],
        },

        projects: {
            label: "پروژه‌ها",
            heading: "پروژه‌های منتخب",
            maxVisible: 5,
            items: [
                {
                    title: "سیستم مدیریت زمین ده‌سبز",
                    icon: "landmark",
                    description:
                        "یک سیستم مدیریت زمین و مالکیت با تمرکز بر معماری بک‌اند، احراز هویت، جریان‌های ثبت و مدل‌سازی داده‌های مقیاس‌پذیر.",
                    tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "JWT"],
                    order: 1,
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
                            label: "نمایش زنده",
                        },
                    },
                },
            ],
        },

        focus: {
            label: "تمرکز فعلی",
            heading: "روی چه چیزهایی تمرکز دارم",
            items: [
                {
                    title: "معماری تمیز",
                    icon: "layers",
                    description:
                        "طراحی سیستم‌هایی با جداسازی واضح مسئولیت‌ها، مرزهای ماژولار و ساختاری که با رشد پروژه قابل نگهداری بماند.",
                },
                {
                    title: "امنیت و احراز هویت",
                    icon: "shield-check",
                    description:
                        "پیاده‌سازی JWT، OTP، MFA و مدیریت نشست‌ها برای محافظت از داده‌ها بدون پیچیده کردن تجربه کاربر.",
                },
            ],
        },

        experience: {
            label: "تجربه",
            heading: "تجربه کاری و آموزشی",
            items: [
                {
                    title: "توسعه‌دهنده بک‌اند",
                    subtitle: "پروژه Deh-Sabz LMS",
                    date: "۲۰۲۴ — اکنون",
                    sortDate: "2024-01-01",
                    description:
                        "ساخت سیستم مدیریت زمین با NestJS، Prisma، PostgreSQL، Redis و JWT و طراحی مدل‌های داده و جریان‌های ثبت.",
                },
            ],
        },

        approach: {
            label: "روش کار و اهداف",
            heading: "روش کاری من",
            quote: "بک‌اند فقط نوشتن کد نیست؛ بلکه طراحی سیستم‌هایی است که با رشد پروژه همچنان واضح، قابل اعتماد و قابل نگهداری باقی بمانند.",
            goalsText:
                "هدف من رشد به عنوان یک توسعه‌دهنده بک‌اند است که سیستم‌هایی می‌سازد که تیم‌ها بتوانند به آن اعتماد کنند.",
            items: [
                {
                    title: "مرحله‌به‌مرحله ساختن",
                    subtitle: "",
                    description:
                        "اول چیزی را می‌سازم که ضروری است و فقط زمانی پیچیدگی اضافه می‌کنم که سیستم واقعاً به آن نیاز داشته باشد.",
                    order: 1,
                },
                {
                    title: "تمیز نگه داشتن معماری",
                    subtitle: "",
                    description:
                        "جداسازی مسئولیت‌ها برای من فقط یک نظریه نیست؛ بلکه بخشی از روش عملی توسعه سیستم است.",
                    order: 2,
                },
            ],
        },

        services: {
            label: "خدمات",
            heading: "چه خدماتی ارائه می‌کنم",
            items: [
                {
                    title: "طراحی سیستم بک‌اند",
                    icon: "layout-dashboard",
                    description:
                        "طراحی معماری‌های بک‌اند مقیاس‌پذیر، ساختارمند و آماده تولید با مرزهای واضح بین ماژول‌ها.",
                },
                {
                    title: "توسعه API",
                    icon: "plug",
                    description:
                        "ساخت APIهای RESTful با NestJS یا Express.js همراه با احراز هویت، اعتبارسنجی و مدیریت خطا.",
                },
            ],
        },

        contact: {
            label: "تماس",
            heading: "بیایید یک سیستم قابل اعتماد بسازیم.",
            description:
                "اگر پروژه‌ای در ذهن دارید یا می‌خواهید درباره معماری بک‌اند صحبت کنیم، خوشحال می‌شوم در ارتباط باشیم.",
            links: [
                {
                    label: "ایمیل",
                    url: "mailto:hello@sajadtavakoli.com",
                    icon: "mail",
                    type: "email",
                },
                {
                    label: "GitHub",
                    url: "https://github.com",
                    icon: "github",
                    type: "external",
                },
                {
                    label: "GitLab",
                    url: "https://gitlab.com",
                    icon: "gitlab",
                    type: "external",
                },
                {
                    label: "LinkedIn",
                    url: "https://linkedin.com",
                    icon: "linkedin",
                    type: "external",
                },
            ],
        },

        footer: {
            text: "© ۲۰۲۶ سجاد علی توکلی",
            highlight: "·",
            role: "توسعه‌دهنده بک‌اند",
            links: [
                {
                    label: "بالا",
                    url: "#hero",
                    type: "internal",
                },
                {
                    label: "GitHub",
                    url: "https://github.com",
                    type: "external",
                },
                {
                    label: "LinkedIn",
                    url: "https://linkedin.com",
                    type: "external",
                },
            ],
        },
    },
};
