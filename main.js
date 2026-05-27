function getDelayClass(index, start = 2) {
    return `delay-${Math.min(index + start, 6)}`;
}

function isExternalLink(url) {
    return Boolean(url && !url.startsWith("#") && !url.startsWith("mailto:"));
}

function renderLucideIcon(iconName, fallback = "circle") {
    return `<i data-lucide="${iconName || fallback}"></i>`;
}

function getIconHtml(iconName) {
    const customIcons = {
        github: `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
        `,
        gitlab: `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M22.65 14.39 12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                <path d="m6.09 9.67 5.91 12.46 5.91-12.46"></path>
            </svg>
        `,
        linkedin: `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        `,
    };

    return customIcons[iconName] || renderLucideIcon(iconName, "circle");
}

function renderSectionHeader(section) {
    return `
        <p class="section-label reveal">${section.label}</p>
        <h2 class="section-heading reveal delay-1">${section.heading}</h2>
    `;
}

function renderExternalAttributes(url, type = "external") {
    return type === "external" && isExternalLink(url) ? 'target="_blank" rel="noopener"' : "";
}

function renderHero() {
    const hero = portfolioData.hero;
    const heroSection = document.getElementById("hero");

    if (!heroSection || !hero) return;

    const buttonsHtml = (hero.buttons || [])
        .filter((button) => button.text && button.link)
        .map((button) => {
            const className = button.type === "outline" ? "btn-outline" : "btn-primary";

            return `
                <a href="${button.link}" class="${className}">
                    ${button.text}
                </a>
            `;
        })
        .join("");

    heroSection.innerHTML = `
        <div class="hero-bg">
            <img src="${hero.image}" alt="${hero.imageAlt || "Portfolio hero image"}" loading="eager">
        </div>

        <div class="hero-overlay"></div>

        <div class="hero-content">
            <p class="hero-label reveal">${hero.label}</p>
            <h1 class="hero-name reveal delay-1">${hero.name}</h1>
            <p class="hero-role reveal delay-2">${hero.role}</p>
            <p class="hero-desc reveal delay-3">${hero.description}</p>

            <div class="hero-cta reveal delay-4">
                ${buttonsHtml}
            </div>
        </div>
    `;
}

function renderAbout() {
    const about = portfolioData.about;
    const aboutSection = document.getElementById("about");

    if (!aboutSection || !about) return;

    const paragraphsHtml = (about.paragraphs || [])
        .map(
            (paragraph, index) => `
                <p class="about-text reveal ${getDelayClass(index)}">
                    ${paragraph}
                </p>
            `,
        )
        .join("");

    aboutSection.innerHTML = `
        <div class="section-max-narrow">
            ${renderSectionHeader(about)}
            ${paragraphsHtml}
        </div>
    `;
}

function renderSkills() {
    const skills = portfolioData.skills;
    const skillsSection = document.getElementById("skills");

    if (!skillsSection || !skills) return;

    const skillCardsHtml = (skills.items || [])
        .map((skill, index) => {
            const bulletsHtml = (skill.bullets || [])
                .map((bullet) => `<li>${bullet}</li>`)
                .join("");

            return `
                <div class="skill-card reveal ${getDelayClass(index)}">
                    <div class="skill-card-header">
                        <div class="skill-card-icon">
                            ${renderLucideIcon(skill.icon)}
                        </div>
                        <p class="skill-category">${skill.title}</p>
                    </div>

                    <ul class="skill-list">
                        ${bulletsHtml}
                    </ul>
                </div>
            `;
        })
        .join("");

    skillsSection.innerHTML = `
        <div class="section-max">
            ${renderSectionHeader(skills)}

            <div class="skills-grid">
                ${skillCardsHtml}
            </div>
        </div>
    `;
}

function renderProjects() {
    const projects = portfolioData.projects;
    const projectsSection = document.getElementById("projects");

    if (!projectsSection || !projects) return;

    const sortedProjects = [...(projects.items || [])]
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .slice(0, projects.maxVisible || 5);

    const projectCardsHtml = sortedProjects
        .map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            const tagsHtml = (project.tags || [])
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join("");

            const linksHtml = Object.values(project.links || {})
                .filter((link) => link && link.label && link.url)
                .map(
                    (link) => `
                        <a href="${link.url}" class="project-link" ${renderExternalAttributes(link.url)}>
                            ${getIconHtml(link.icon || "external-link")}
                            ${link.label}
                        </a>
                    `,
                )
                .join("");

            return `
                <div class="project-card reveal ${getDelayClass(index)}">
                    <div class="project-header">
                        <p class="project-number">${number}</p>
                        <div class="project-icon">
                            ${renderLucideIcon(project.icon)}
                        </div>
                    </div>

                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>

                    <div class="tags-container">
                        ${tagsHtml}
                    </div>

                    ${
                        linksHtml
                            ? `
                                <div class="project-links">
                                    ${linksHtml}
                                </div>
                            `
                            : ""
                    }
                </div>
            `;
        })
        .join("");

    projectsSection.innerHTML = `
        <div class="section-max">
            ${renderSectionHeader(projects)}

            <div class="projects-list">
                ${projectCardsHtml}
            </div>
        </div>
    `;
}

function renderFocus() {
    const focus = portfolioData.focus;
    const focusSection = document.getElementById("focus");

    if (!focusSection || !focus) return;

    const focusCardsHtml = (focus.items || [])
        .map(
            (item, index) => `
                <div class="focus-card reveal ${getDelayClass(index)}">
                    <div class="focus-icon">
                        ${renderLucideIcon(item.icon)}
                    </div>

                    <h3 class="focus-title">${item.title}</h3>
                    <p class="focus-desc">${item.description}</p>
                </div>
            `,
        )
        .join("");

    focusSection.innerHTML = `
        <div class="section-max">
            ${renderSectionHeader(focus)}

            <div class="focus-grid">
                ${focusCardsHtml}
            </div>
        </div>
    `;
}

function renderExperience() {
    const experience = portfolioData.experience;
    const experienceSection = document.getElementById("experience");

    if (!experienceSection || !experience) return;

    const sortedItems = [...(experience.items || [])].sort(
        (a, b) => new Date(b.sortDate) - new Date(a.sortDate),
    );

    const experienceItemsHtml = sortedItems
        .map(
            (item, index) => `
                <div class="timeline-item reveal ${getDelayClass(index)}">
                    <p class="timeline-date">${item.date}</p>
                    <h3 class="timeline-role">${item.title}</h3>
                    <p class="timeline-company">${item.subtitle}</p>
                    <p class="timeline-desc">${item.description}</p>
                </div>
            `,
        )
        .join("");

    experienceSection.innerHTML = `
        <div class="section-max-narrow">
            ${renderSectionHeader(experience)}

            <div class="timeline">
                ${experienceItemsHtml}
            </div>
        </div>
    `;
}

function renderApproach() {
    const approach = portfolioData.approach;
    const approachSection = document.getElementById("approach");

    if (!approachSection || !approach) return;

    const sortedItems = [...(approach.items || [])].sort((a, b) => (a.order || 0) - (b.order || 0));

    const approachCardsHtml = sortedItems
        .map((item, index) => {
            const number = String(index + 1).padStart(2, "0");

            return `
                <div class="principle-card reveal ${getDelayClass(index, 3)}">
                    <p class="principle-num">${number}</p>
                    <h4 class="principle-title">${item.title}</h4>
                    ${item.subtitle ? `<p class="principle-subtitle">${item.subtitle}</p>` : ""}
                    <p class="principle-desc">${item.description}</p>
                </div>
            `;
        })
        .join("");

    approachSection.innerHTML = `
        <div class="section-max-narrow" style="text-align: center;">
            ${renderSectionHeader(approach)}

            <p class="approach-quote reveal delay-2">${approach.quote}</p>

            <div class="principles-grid">
                ${approachCardsHtml}
            </div>

            <p class="goals-text reveal delay-6">
                ${approach.goalsText}
            </p>
        </div>
    `;
}

function renderServices() {
    const services = portfolioData.services;
    const servicesSection = document.getElementById("services");

    if (!servicesSection || !services) return;

    const serviceCardsHtml = (services.items || [])
        .map(
            (service, index) => `
                <div class="service-card reveal ${getDelayClass(index)}">
                    <div class="service-icon">
                        ${renderLucideIcon(service.icon)}
                    </div>

                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-desc">${service.description}</p>
                </div>
            `,
        )
        .join("");

    servicesSection.innerHTML = `
        <div class="section-max">
            ${renderSectionHeader(services)}

            <div class="services-grid">
                ${serviceCardsHtml}
            </div>
        </div>
    `;
}

function renderContact() {
    const contact = portfolioData.contact;
    const contactSection = document.getElementById("contact");

    if (!contactSection || !contact) return;

    const linksHtml = (contact.links || [])
        .filter((link) => link.label && link.url)
        .map(
            (link) => `
                <a
                    href="${link.url}"
                    class="contact-link"
                    ${renderExternalAttributes(link.url, link.type)}
                >
                    ${getIconHtml(link.icon || "circle")}
                    ${link.label}
                </a>
            `,
        )
        .join("");

    contactSection.innerHTML = `
        <div class="section-max-narrow" style="text-align: center;">
            <p class="section-label reveal">${contact.label}</p>
            <h2 class="contact-heading reveal delay-1">${contact.heading}</h2>
            <p class="contact-sub reveal delay-2">${contact.description}</p>

            <div class="contact-links reveal delay-3">
                ${linksHtml}
            </div>
        </div>
    `;
}

function renderFooter() {
    const footer = portfolioData.footer;
    const footerElement = document.getElementById("footer");

    if (!footerElement || !footer) return;

    const linksHtml = (footer.links || [])
        .filter((link) => link.label && link.url)
        .map(
            (link) => `
                <a href="${link.url}" ${renderExternalAttributes(link.url, link.type)}>
                    ${link.label}
                </a>
            `,
        )
        .join("");

    footerElement.innerHTML = `
        <p class="footer-text">
            ${footer.text || ""}
            <span>${footer.highlight || "·"}</span>
            ${footer.role || ""}
        </p>

        <div class="footer-links">
            ${linksHtml}
        </div>
    `;
}

function renderPortfolio() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderFocus();
    renderExperience();
    renderApproach();
    renderServices();
    renderContact();
    renderFooter();

    lucide.createIcons();
}

function initPreloader() {
    const preloader = document.getElementById("preloader");
    const pageContent = document.getElementById("page-content");
    const heroImg = document.querySelector(".hero-bg img");
    const minDisplayTime = 1200;

    let imageReady = false;
    let minimumTimePassed = false;

    if (!preloader || !pageContent) return;

    function revealPage() {
        if (!imageReady || !minimumTimePassed) return;

        // Give browser one paint frame before removing preloader
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                preloader.classList.add("loaded");
                pageContent.classList.add("visible");
                setTimeout(initReveals, 100);
            });
        });
    }

    async function waitForHeroImage() {
        if (!heroImg) {
            imageReady = true;
            revealPage();
            return;
        }

        try {
            if (!heroImg.complete) {
                await new Promise((resolve, reject) => {
                    heroImg.addEventListener("load", resolve, { once: true });
                    heroImg.addEventListener("error", reject, { once: true });
                });
            }

            if (heroImg.decode) {
                await heroImg.decode();
            }

            imageReady = true;
            revealPage();
        } catch (error) {
            console.warn("Hero image could not be fully loaded or decoded.", error);
            imageReady = true;
            revealPage();
        }
    }

    waitForHeroImage();

    setTimeout(() => {
        minimumTimePassed = true;
        revealPage();
    }, minDisplayTime);

    // Safety fallback
    setTimeout(() => {
        if (!preloader.classList.contains("loaded")) {
            preloader.classList.add("loaded");
            pageContent.classList.add("visible");
            setTimeout(initReveals, 100);
        }
    }, 8000);
}

function initNavbar() {
    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
}

function initMobileMenu() {
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileToggle || !mobileMenu) return;

    let menuOpen = false;

    window.closeMobile = function closeMobile() {
        menuOpen = false;
        mobileMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
        mobileToggle.innerHTML = renderLucideIcon("menu");
        lucide.createIcons();
    };

    mobileToggle.addEventListener("click", () => {
        menuOpen = !menuOpen;

        mobileMenu.classList.toggle("active", menuOpen);
        mobileToggle.classList.toggle("active", menuOpen);

        mobileToggle.innerHTML = menuOpen ? renderLucideIcon("x") : renderLucideIcon("menu");

        lucide.createIcons();
    });
}

function initReveals() {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        revealObserver.observe(element);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

function initPortfolio() {
    renderPortfolio();
    initPreloader();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
}

initPortfolio();
