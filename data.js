const portfolioData = {
    en: {
        nav: {
            logo: "sajad",
            logoAccent: ".",
            links: [
                { label: "About", url: "#about" },
                { label: "Skills", url: "#skills" },
                { label: "Projects", url: "#projects" },
                { label: "Focus", url: "#focus" },
                { label: "Experience", url: "#experience" },
                { label: "Approach", url: "#approach" },
                { label: "Contact", url: "#contact" },
            ],
        },

        hero: {
            image: "./assets/images/hero_background.png",
            imageAlt: "Sajad Ali Tavakoli",
            label: "Backend Developer",
            name: "Sajad Ali<br>Tavakoli",
            role: "Building reliable systems for businesses and teams.",
            description:
                "I build backend systems, databases, and APIs that help businesses organize information, simplify daily operations, and grow products with confidence.",
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
            heading: "What I Do",
            paragraphs: [
                "I am a backend developer focused on building the behind-the-scenes parts of software — the systems that store information, manage users, protect data, and keep websites or applications running reliably.",
                "For business owners, my goal is to build systems that make work more organized, faster, and easier to track. For technical teams, I focus on writing code that is clear, maintainable, and easy to extend.",
                "I work step by step. Instead of making large and risky changes, I first understand the main need, design the right structure, and then build features in a controlled and reliable way.",
            ],
        },

        skills: {
            label: "Skills",
            heading: "Technical Skills",
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
                    title: "Security & Performance",
                    icon: "shield-check",
                    bullets: ["JWT", "OTP", "2FA/MFA, Lockout Policy", "Redis"],
                },
                {
                    title: "Programming Languages",
                    icon: "code-2",
                    bullets: ["JavaScript", "TypeScript", "Python", "Java"],
                },
                {
                    title: "Work Tools",
                    icon: "wrench",
                    bullets: ["Git", "VS Code", "Docker", "Swagger"],
                },
            ],
        },

        projects: {
            label: "Projects",
            heading: "Selected Work",
            maxVisible: 5,
            items: [
                {
                    title: "Deh-Sabz LMS / Land Management System",
                    icon: "landmark",
                    description:
                        "A system for managing lands, ownership records, documents, and property-related information. The goal of this project is to simplify administrative work, reduce data entry mistakes, and create a clear workflow for managing sensitive records.",
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
                        "An educational application that helps users memorize and review information more effectively. It can be used for language learning, lesson review, and structured study by reminding users to practice at the right time.",
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
                        "A system for managing students, teachers, courses, enrollments, salaries, costs, and reports. It helps educational centers organize daily and monthly information in a more structured and trackable way.",
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
                        "A simple system for publishing and managing written content. This project shows how dynamic content can be displayed, how pages can be organized, and how a web application structure can stay simple and understandable.",
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
                        "A system for adding, viewing, updating, and deleting student information. This project focuses on the core operations of data management and shows my ability to build simple, useful, and practical systems.",
                    tags: ["PHP", "MySQL", "JavaScript"],
                    order: 5,
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
            heading: "What I Am Focused On",
            items: [
                {
                    title: "Clean and Understandable Structure",
                    icon: "layers",
                    description:
                        "I focus on building systems that do not only work today, but also remain understandable and extendable for developers, team leaders, and businesses in the future.",
                },
                {
                    title: "User and Data Security",
                    icon: "shield-check",
                    description:
                        "Security is important in every system. I focus on secure login, session management, role-based access, and protecting sensitive user and business data.",
                },
                {
                    title: "Better Information Management",
                    icon: "database",
                    description:
                        "Many business problems start with unorganized data. I focus on designing databases that keep information clear, accurate, searchable, and ready for reporting.",
                },
                {
                    title: "Speed and Better User Experience",
                    icon: "zap",
                    description:
                        "A good system should be fast and reliable. I focus on performance, reducing delays, and using caching properly so users can work more smoothly.",
                },
            ],
        },

        experience: {
            label: "Experience",
            heading: "Work and Teaching Experience",
            items: [
                {
                    title: "Backend Developer",
                    subtitle: "Shafaf Hub",
                    date: "2025/12 — Present",
                    sortDate: "2025-12-01",
                    description:
                        "Working as a Backend Developer with the Shafaf Hub team on a payment system. My work focuses on building secure and production-ready backend features, including API standards, authentication and authorization, role-based access, multi-tenancy, KYC workflows, notifications, file handling, background jobs, provider integrations, and customer payment-related services.",
                },
                {
                    title: "Computer Teacher",
                    subtitle: "Shams Private High School",
                    date: "2025/03 — 2025/12",
                    sortDate: "2025-03-01",
                    description:
                        "Worked as a Computer Teacher at Shams High School, teaching students practical computer skills including ICDL topics such as Windows, Microsoft Word, Excel, and PowerPoint, as well as introductory Python programming. This role helped me explain technical concepts clearly and guide students step by step.",
                },
                {
                    title: "Full-Stack Developer",
                    subtitle: "Independent and Practice Projects",
                    date: "2023 — 2025",
                    sortDate: "2023-01-01",
                    description:
                        "Worked on projects such as learning systems, blog applications, and student management tools. These projects helped me understand how to turn user needs into practical technical solutions.",
                },
                {
                    title: "Computer Science Student",
                    subtitle: "University",
                    date: "2019 — 2023",
                    sortDate: "2019-01-01",
                    description:
                        "Studied core computer science topics including software engineering, databases, algorithms, data structures, and programming, building a strong technical foundation for professional software development.",
                },
            ],
        },

        approach: {
            label: "Approach & Goals",
            heading: "How I Work",
            quote: "For me, programming is not only about writing code. The main goal is to build systems that solve real problems, are simple for users, and remain maintainable for teams.",
            goalsText:
                "My goal is to grow as a backend developer who builds systems that create real value for businesses — systems that organize information, speed up work, and make decision-making easier.",
            items: [
                {
                    title: "Understand the Problem First",
                    subtitle: "",
                    description:
                        "Before writing code, I try to understand the real need of the project. This helps me build systems that are not only technically good, but also useful for users and businesses.",
                    order: 1,
                },
                {
                    title: "Build Step by Step",
                    subtitle: "",
                    description:
                        "I divide projects into small and manageable parts. This reduces risk, makes testing easier, and helps the final result become more reliable.",
                    order: 2,
                },
                {
                    title: "Write Code Teams Can Continue",
                    subtitle: "",
                    description:
                        "A good system should be understandable for other developers too. That is why I care about clear naming, organized structure, and proper separation of responsibilities.",
                    order: 3,
                },
            ],
        },

        services: {
            label: "Services",
            heading: "How I Can Help",
            items: [
                {
                    title: "Backend System Design",
                    icon: "layout-dashboard",
                    description:
                        "I can design the main backend structure of a software system — the part that manages data, users, access, business logic, and communication between different parts of the product.",
                },
                {
                    title: "API Development",
                    icon: "plug",
                    description:
                        "I build APIs that allow different parts of a system, such as websites, mobile apps, and admin panels, to communicate with each other securely and consistently.",
                },
                {
                    title: "Database Design and Optimization",
                    icon: "hard-drive",
                    description:
                        "For businesses that work with a lot of information, a well-designed database is very important. I design database structures that keep information searchable, reportable, and ready to grow.",
                },
                {
                    title: "Security and Access Management",
                    icon: "lock",
                    description:
                        "I can implement login systems, user roles, access levels, tokens, and security rules so each user can access only the parts of the system they are allowed to use.",
                },
            ],
        },

        contact: {
            label: "Contact",
            heading: "Let’s talk about your project.",
            description:
                "If you are a business owner, a technical team, or a hiring manager looking for a developer who can build reliable backend systems, I would be happy to talk.",
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
            role: "Backend Developer",
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
        nav: {
            logo: "sajad",
            logoAccent: ".",
            links: [
                { label: "درباره من", url: "#about" },
                { label: "مهارت‌ها", url: "#skills" },
                { label: "پروژه‌ها", url: "#projects" },
                { label: "تمرکز", url: "#focus" },
                { label: "تجربه", url: "#experience" },
                { label: "روش کار", url: "#approach" },
                { label: "تماس", url: "#contact" },
            ],
        },

        hero: {
            image: "./assets/images/hero_background.png",
            imageAlt: "سجاد علی توکلی",
            label: "توسعه‌دهنده بک‌اند",
            name: "سجاد علی<br>توکلی",
            role: "ساخت سیستم‌های قابل اعتماد برای کسب‌وکارها و تیم‌ها.",
            description:
                "من سیستم‌های بک‌اند، دیتابیس و APIهایی می‌سازم که کارهای روزمره را ساده‌تر، اطلاعات را منظم‌تر و رشد یک محصول یا کسب‌وکار را آسان‌تر می‌کنند.",
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
            heading: "من چه کاری انجام می‌دهم؟",
            paragraphs: [
                "من توسعه‌دهنده بک‌اند هستم و تمرکزم روی ساخت بخش‌های پشت‌صحنه نرم‌افزار است؛ همان بخشی که اطلاعات را ذخیره می‌کند، کاربران را مدیریت می‌کند، امنیت سیستم را حفظ می‌کند و باعث می‌شود یک وب‌سایت یا اپلیکیشن قابل اعتماد کار کند.",
                "برای صاحبان کسب‌وکار، هدف من ساخت سیستم‌هایی است که کارها را منظم‌تر، سریع‌تر و قابل پیگیری‌تر کند. برای تیم‌های فنی، تلاش می‌کنم کدی بنویسم که واضح، قابل نگهداری و قابل توسعه باشد.",
                "من پروژه‌ها را مرحله‌به‌مرحله پیش می‌برم. به جای تغییرات بزرگ و پرریسک، ابتدا نیاز اصلی سیستم را مشخص می‌کنم، ساختار درست را می‌سازم و بعد امکانات را به شکل قابل کنترل توسعه می‌دهم.",
            ],
        },

        skills: {
            label: "مهارت‌ها",
            heading: "مهارت‌های فنی من",
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
                    title: "امنیت و کارایی",
                    icon: "shield-check",
                    bullets: ["JWT", "OTP", "2FA/MFA, Lockout Policy", "Redis"],
                },
                {
                    title: "زبان‌های برنامه‌نویسی",
                    icon: "code-2",
                    bullets: ["JavaScript", "TypeScript", "Python", "Java"],
                },
                {
                    title: "ابزارهای کاری",
                    icon: "wrench",
                    bullets: ["Git", "VS Code", "Docker", "Swagger"],
                },
            ],
        },

        projects: {
            label: "پروژه‌ها",
            heading: "نمونه کارهای منتخب",
            maxVisible: 5,
            items: [
                {
                    title: "سیستم مدیریت زمین ده‌سبز",
                    icon: "landmark",
                    description:
                        "یک سیستم برای مدیریت زمین‌ها، مالکیت‌ها، ثبت اسناد و پیگیری معلومات مربوط به املاک. هدف این پروژه ساده‌سازی کارهای اداری، کاهش خطا در ثبت اطلاعات و ایجاد یک جریان کاری منظم برای مدیریت داده‌های حساس است.",
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
                            label: "نمایش زنده",
                        },
                    },
                },
                {
                    title: "سیستم یادگیری لایتنر",
                    icon: "brain",
                    description:
                        "یک اپلیکیشن آموزشی برای کمک به یادگیری و حفظ بهتر مطالب. این سیستم می‌تواند برای یادگیری زبان، مرور درس‌ها و مدیریت برنامه مطالعه استفاده شود و به کاربر کمک می‌کند مطالب را در زمان مناسب دوباره تمرین کند.",
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
                            label: "نمایش زنده",
                        },
                    },
                },
                {
                    title: "سیستم مدیریت مرکز آموزشی",
                    icon: "graduation-cap",
                    description:
                        "یک سیستم برای مدیریت شاگردان، استادان، کورس‌ها، ثبت‌نام‌ها، معاشات، مصارف و گزارش‌ها. این پروژه برای مراکز آموزشی کمک می‌کند معلومات روزانه و ماهانه خود را منظم‌تر و قابل پیگیری‌تر مدیریت کنند.",
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
                            label: "نمایش زنده",
                        },
                    },
                },
                {
                    title: "اپلیکیشن وبلاگ",
                    icon: "pen-line",
                    description:
                        "یک سیستم ساده برای نشر و مدیریت نوشته‌ها. این پروژه نشان می‌دهد که چگونه می‌توان محتوا را به شکل داینامیک نمایش داد، صفحات مختلف ساخت و ساختار یک وب‌اپلیکیشن را ساده و قابل فهم نگه داشت.",
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
                            label: "نمایش زنده",
                        },
                    },
                },
                {
                    title: "سیستم مدیریت شاگردان",
                    icon: "users",
                    description:
                        "یک سیستم برای ثبت، نمایش، ویرایش و حذف معلومات شاگردان. این پروژه روی کارهای اصلی مدیریت اطلاعات تمرکز دارد و برای نشان دادن مهارت در ساخت سیستم‌های کاربردی و ساده مناسب است.",
                    tags: ["PHP", "MySQL", "JavaScript"],
                    order: 5,
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
            heading: "در حال حاضر روی چه چیزهایی تمرکز دارم؟",
            items: [
                {
                    title: "ساختار تمیز و قابل فهم",
                    icon: "layers",
                    description:
                        "تمرکز من روی ساخت سیستم‌هایی است که فقط امروز کار نکنند، بلکه بعداً هم برای توسعه‌دهندگان، مدیران تیم و کسب‌وکار قابل فهم و قابل توسعه باشند.",
                },
                {
                    title: "امنیت کاربران و اطلاعات",
                    icon: "shield-check",
                    description:
                        "در هر سیستم، امنیت اطلاعات کاربران و دسترسی‌ها اهمیت زیادی دارد. من روی روش‌هایی مانند ورود امن، مدیریت نشست‌ها و کنترل دسترسی تمرکز می‌کنم.",
                },
                {
                    title: "مدیریت درست اطلاعات",
                    icon: "database",
                    description:
                        "بسیاری از مشکلات کسب‌وکارها از اطلاعات نامنظم شروع می‌شود. من روی طراحی دیتابیس‌هایی تمرکز دارم که اطلاعات را واضح، دقیق و قابل گزارش‌گیری نگه دارند.",
                },
                {
                    title: "سرعت و تجربه بهتر کاربر",
                    icon: "zap",
                    description:
                        "یک سیستم خوب باید سریع و قابل اعتماد باشد. من روی بهینه‌سازی عملکرد، کاهش تأخیر و استفاده درست از کشینگ تمرکز می‌کنم تا تجربه کاربر بهتر شود.",
                },
            ],
        },

        experience: {
            label: "تجربه",
            heading: "تجربه کاری و آموزشی",
            items: [
                {
                    title: "توسعه‌دهنده بک‌اند",
                    subtitle: "شفاف هب (Shafaf Hub)",
                    date: "۲۰۲۵/۱۲ — اکنون",
                    sortDate: "2025-01-01",
                    description:
                        "به عنوان توسعه‌دهنده بک‌اند در تیم Shafaf Hub روی ساخت یک سیستم پرداخت کار می‌کنم. تمرکز من روی پیاده‌سازی بخش‌های امن و آماده استفاده واقعی است؛ از جمله استانداردسازی APIها، احراز هویت و سطح دسترسی، مدیریت نقش‌ها، جداسازی اطلاعات کاربران و شرکت‌ها، جریان‌های KYC، نوتیفیکیشن‌ها، مدیریت فایل‌ها، کارهای پس‌زمینه، اتصال با سرویس‌دهنده‌ها و بخش‌های مربوط به خدمات پرداخت مشتریان.",
                },
                {
                    title: "توسعه‌دهنده فول‌استک",
                    subtitle: "پروژه‌های تمرینی و مستقل",
                    date: "۲۰۲۳ — ۲۰۲۵",
                    sortDate: "2023-01-01",
                    description:
                        "روی پروژه‌هایی مانند سیستم یادگیری، وبلاگ و مدیریت شاگردان کار کرده‌ام. این تجربه‌ها به من کمک کرده‌اند بهتر بفهمم چگونه نیاز کاربر را به ساختار فنی قابل اجرا تبدیل کنم.",
                },
                {
                    title: "استاد کمپیوتر",
                    subtitle: "لیسه عالی خصوصی شمس",
                    date: "۲۰۲۵/۰۳ — ۲۰۲۵/۱۲",
                    sortDate: "2022-01-01",
                    description:
                        "به عنوان معلم کمپیوتر در لیسه شمس کار کرده‌ام و برای شاگردان مهارت‌های عملی کمپیوتر را تدریس کرده‌ام؛ از جمله موضوعات ICDL مانند Windows، Microsoft Word، Excel و PowerPoint، همچنان برنامه‌نویسی مقدماتی با Python. این تجربه به من کمک کرد تا مفاهیم تخنیکی را ساده، واضح و مرحله‌به‌مرحله توضیح بدهم و یادگیری تکنالوژی را برای افراد مبتدی آسان‌تر بسازم.",
                },
                {
                    title: "محصل کمپیوتر ساینس",
                    subtitle: "دانشگاه",
                    date: "۲۰۱۹ — ۲۰۲۳",
                    sortDate: "2019-01-01",
                    description:
                        "در این دوره مفاهیم اصلی کمپیوتر ساینس، مهندسی نرم‌افزار، دیتابیس، الگوریتم‌ها و برنامه‌نویسی را یاد گرفتم و پایه فنی خود را برای کار حرفه‌ای تقویت کردم.",
                },
            ],
        },

        approach: {
            label: "روش کار و اهداف",
            heading: "چگونه کار می‌کنم؟",
            quote: "برای من برنامه‌نویسی فقط نوشتن کد نیست؛ هدف اصلی ساخت سیستمی است که مشکل واقعی را حل کند، برای کاربر ساده باشد و برای تیم قابل نگهداری بماند.",
            goalsText:
                "هدف من این است که به عنوان توسعه‌دهنده بک‌اند، سیستم‌هایی بسازم که برای کسب‌وکارها ارزش واقعی ایجاد کند؛ سیستم‌هایی که اطلاعات را منظم‌تر، کارها را سریع‌تر و تصمیم‌گیری را آسان‌تر کنند.",
            items: [
                {
                    title: "اول فهمیدن مشکل، بعد نوشتن کد",
                    subtitle: "",
                    description:
                        "قبل از پیاده‌سازی، تلاش می‌کنم نیاز اصلی پروژه را بفهمم. این کار باعث می‌شود سیستم فقط از نظر فنی خوب نباشد، بلکه واقعاً برای کاربر و کسب‌وکار مفید باشد.",
                    order: 1,
                },
                {
                    title: "ساخت مرحله‌به‌مرحله",
                    subtitle: "",
                    description:
                        "من پروژه را به بخش‌های کوچک و قابل مدیریت تقسیم می‌کنم. این روش ریسک را کم می‌کند، تست کردن را آسان‌تر می‌سازد و باعث می‌شود نتیجه نهایی قابل اعتمادتر باشد.",
                    order: 2,
                },
                {
                    title: "کدی که تیم بتواند ادامه دهد",
                    subtitle: "",
                    description:
                        "یک سیستم خوب باید برای دیگر توسعه‌دهندگان هم قابل فهم باشد. به همین دلیل روی نام‌گذاری واضح، ساختار منظم و جداسازی درست بخش‌های سیستم توجه می‌کنم.",
                    order: 3,
                },
            ],
        },

        services: {
            label: "خدمات",
            heading: "در چه بخش‌هایی می‌توانم کمک کنم؟",
            items: [
                {
                    title: "طراحی سیستم بک‌اند",
                    icon: "layout-dashboard",
                    description:
                        "می‌توانم ساختار اصلی پشت‌صحنه یک نرم‌افزار را طراحی کنم؛ بخشی که اطلاعات، کاربران، دسترسی‌ها و منطق اصلی سیستم را مدیریت می‌کند.",
                },
                {
                    title: "توسعه API",
                    icon: "plug",
                    description:
                        "APIهایی می‌سازم که بخش‌های مختلف یک سیستم، مانند وب‌سایت، اپلیکیشن موبایل یا پنل مدیریت، بتوانند به شکل امن و منظم با هم ارتباط بگیرند.",
                },
                {
                    title: "طراحی و بهینه‌سازی دیتابیس",
                    icon: "hard-drive",
                    description:
                        "برای کسب‌وکارهایی که با اطلاعات زیاد سروکار دارند، دیتابیس منظم اهمیت زیادی دارد. من ساختار دیتابیس را طوری طراحی می‌کنم که اطلاعات قابل جستجو، قابل گزارش‌گیری و قابل توسعه باشد.",
                },
                {
                    title: "امنیت و مدیریت دسترسی",
                    icon: "lock",
                    description:
                        "می‌توانم سیستم ورود، نقش‌های کاربری، سطح دسترسی، توکن‌ها و روش‌های امنیتی را پیاده‌سازی کنم تا هر کاربر فقط به بخش‌های مجاز دسترسی داشته باشد.",
                },
            ],
        },

        contact: {
            label: "تماس",
            heading: "بیایید درباره پروژه شما صحبت کنیم.",
            description:
                "اگر صاحب کسب‌وکار هستید، تیم فنی دارید، یا به دنبال توسعه‌دهنده‌ای هستید که بتواند سیستم بک‌اند قابل اعتماد بسازد، خوشحال می‌شوم با شما صحبت کنم.",
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
                {
                    label: "رزومه",
                    url: "#",
                    icon: "file-text",
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
};
