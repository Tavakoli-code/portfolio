const LANGUAGE_KEY = "portfolioLang";
const DEFAULT_LANGUAGE = "en";
const DARI_LANGUAGE = "fa";
const MIN_PRELOADER_TIME = 1200;
const PRELOADER_FALLBACK_TIME = 8000;

let currentLang = getSavedLanguage();
let revealObserver = null;
let menuOpen = false;

const elements = {};

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

function getSavedLanguage() {
    try {
        return localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
    } catch {
        return DEFAULT_LANGUAGE;
    }
}

function saveLanguage(language) {
    try {
        localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
        // Ignore storage errors, such as private browsing restrictions.
    }
}

function cacheElements() {
    elements.html = document.documentElement;
    elements.body = document.body;
    elements.preloader = document.getElementById("preloader");
    elements.pageContent = document.getElementById("page-content");
    elements.navbar = document.getElementById("navbar");
    elements.navLogo = document.getElementById("navLogo");
    elements.navLinks = document.getElementById("navLinks");
    elements.mobileToggle = document.getElementById("mobileToggle");
    elements.mobileMenu = document.getElementById("mobileMenu");
    elements.languageToggle = document.getElementById("languageToggle");
}

function getPortfolioData() {
    return portfolioData[currentLang] || portfolioData[DEFAULT_LANGUAGE];
}

function updateDocumentLanguage() {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (!htmlElement) return;

    const isDari = currentLang === "fa";

    htmlElement.setAttribute("lang", isDari ? "fa" : "en");
    htmlElement.setAttribute("dir", isDari ? "rtl" : "ltr");

    if (bodyElement) {
        bodyElement.classList.toggle("rtl", isDari);
    }
}

function updateLanguageToggle() {
    const languageToggle = document.getElementById("languageToggle");

    if (!languageToggle) return;

    languageToggle.textContent = currentLang === "fa" ? "EN" : "دری";
    languageToggle.setAttribute(
        "aria-label",
        currentLang === "fa" ? "Switch to English" : "تبدیل به دری",
    );
}

function getDelayClass(index, start = 2) {
    return `delay-${Math.min(index + start, 6)}`;
}

function isExternalLink(url) {
    return Boolean(url && !url.startsWith("#") && !url.startsWith("mailto:"));
}

function renderLucideIcon(iconName, fallback = "circle") {
    return `<i data-lucide="${iconName || fallback}"></i>`;
}

function renderIcon(iconName, fallback = "circle") {
    return customIcons[iconName] || renderLucideIcon(iconName, fallback);
}

function renderExternalAttributes(url, type = "external") {
    return type === "external" && isExternalLink(url) ? 'target="_blank" rel="noopener"' : "";
}

function renderSectionHeader(section) {
    return `
        <p class="section-label reveal">${section.label}</p>
        <h2 class="section-heading reveal delay-1">${section.heading}</h2>
    `;
}

function renderNavLinks(links = [], isMobile = false) {
    return links
        .filter((link) => link.label && link.url)
        .map((link) => {
            if (isMobile) {
                return `<a href="${link.url}" data-mobile-link>${link.label}</a>`;
            }

            return `
                <li>
                    <a href="${link.url}">${link.label}</a>
                </li>
            `;
        })
        .join("");
}

function renderNavigation() {
    const nav = getPortfolioData().nav;
    const navLogo = document.getElementById("navLogo");
    const navLinks = document.getElementById("navLinks");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!nav) return;

    if (navLogo) {
        navLogo.innerHTML = `${nav.logo}<span>${nav.logoAccent || "."}</span>dev`;
    }

    const links = (nav.links || []).filter((link) => link.label && link.url);

    if (navLinks) {
        navLinks.innerHTML = links
            .map(
                (link) => `
                    <li>
                        <a href="${link.url}">${link.label}</a>
                    </li>
                `,
            )
            .join("");
    }

    if (mobileMenu) {
        mobileMenu.innerHTML = links
            .map(
                (link) => `
                    <a href="${link.url}">
                        ${link.label}
                    </a>
                `,
            )
            .join("");
    }
}

function renderHero() {
    const { hero } = getPortfolioData();
    const heroSection = document.getElementById("hero");

    if (!heroSection || !hero) return;

    const buttonsHtml = (hero.buttons || [])
        .filter((button) => button.text && button.link)
        .map((button) => {
            const className = button.type === "outline" ? "btn-outline" : "btn-primary";

            return `<a href="${button.link}" class="${className}">${button.text}</a>`;
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
    const { about } = getPortfolioData();
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
        <div class="section-max">
            ${renderSectionHeader(about)}
            ${paragraphsHtml}
        </div>
    `;
}

function renderSkills() {
    const { skills } = getPortfolioData();
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

function renderProjectLinks(links = {}) {
    return Object.values(links)
        .filter((link) => link && link.label && link.url)
        .map(
            (link) => `
                <a href="${link.url}" class="project-link" ${renderExternalAttributes(link.url)}>
                    ${renderIcon(link.icon || "external-link")}
                    ${link.label}
                </a>
            `,
        )
        .join("");
}

function renderProjects() {
    const { projects } = getPortfolioData();
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
            const linksHtml = renderProjectLinks(project.links);

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

                    ${linksHtml ? `<div class="project-links">${linksHtml}</div>` : ""}
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
    const { focus } = getPortfolioData();
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
    const { experience } = getPortfolioData();
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
        <div class="section-max">
            ${renderSectionHeader(experience)}

            <div class="timeline">
                ${experienceItemsHtml}
            </div>
        </div>
    `;
}

function renderApproach() {
    const { approach } = getPortfolioData();
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
        <div class="section-max">
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
    const { services } = getPortfolioData();
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
    const { contact } = getPortfolioData();
    const contactSection = document.getElementById("contact");

    if (!contactSection || !contact) return;

    const linksHtml = (contact.links || [])
        .filter((link) => link.label && link.url)
        .map(
            (link) => `
                <a href="${link.url}" class="contact-link" ${renderExternalAttributes(link.url, link.type)}>
                    ${renderIcon(link.icon || "circle")}
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
    const { footer } = getPortfolioData();

    if (!elements.footer) {
        elements.footer = document.getElementById("footer");
    }

    if (!elements.footer || !footer) return;

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

    elements.footer.innerHTML = `
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
    renderNavigation();
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

    requestAnimationFrame(() => {
        initReveals();
    });
}

function showPage() {
    elements.preloader.classList.add("loaded");
    elements.pageContent.classList.add("visible");
    initReveals();
}

async function waitForHeroImage() {
    const heroImg = document.querySelector(".hero-bg img");

    if (!heroImg) return;

    if (!heroImg.complete) {
        await new Promise((resolve) => {
            heroImg.addEventListener("load", resolve, { once: true });
            heroImg.addEventListener("error", resolve, { once: true });
        });
    }

    if (heroImg.decode) {
        await heroImg.decode().catch(() => undefined);
    }
}

function initPreloader() {
    const preloader = document.getElementById("preloader");
    const pageContent = document.getElementById("page-content");
    const heroImg = document.querySelector(".hero-bg img");

    const minimumDisplayTime = 1200;
    const maximumWaitTime = 12000;

    if (!preloader || !pageContent) return;

    let minimumTimePassed = false;
    let heroImageReady = false;
    let pageRevealed = false;

    function revealPage() {
        if (pageRevealed) return;
        if (!minimumTimePassed || !heroImageReady) return;

        pageRevealed = true;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                preloader.classList.add("loaded");
                pageContent.classList.add("visible");
                initReveals();
            });
        });
    }

    function waitForMinimumTime() {
        setTimeout(() => {
            minimumTimePassed = true;
            revealPage();
        }, minimumDisplayTime);
    }

    async function waitForHeroImage() {
        if (!heroImg) {
            heroImageReady = true;
            revealPage();
            return;
        }

        try {
            if (!heroImg.complete || heroImg.naturalWidth === 0) {
                await new Promise((resolve, reject) => {
                    heroImg.addEventListener("load", resolve, { once: true });
                    heroImg.addEventListener("error", reject, { once: true });
                });
            }

            if (heroImg.decode) {
                await heroImg.decode();
            }

            if (heroImg.naturalWidth === 0) {
                throw new Error("Hero image loaded but has no natural width.");
            }

            heroImageReady = true;
            revealPage();
        } catch (error) {
            console.warn("Hero image failed to load or decode:", error);

            // Do not block the whole page forever if image path is wrong
            heroImageReady = true;
            revealPage();
        }
    }

    waitForMinimumTime();
    waitForHeroImage();

    // Safety fallback for very slow networks
    setTimeout(() => {
        if (pageRevealed) return;

        minimumTimePassed = true;
        heroImageReady = true;
        revealPage();
    }, maximumWaitTime);
}

function initNavbar() {
    if (!elements.navbar) return;

    window.addEventListener("scroll", () => {
        elements.navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
}

function closeMobileMenu() {
    if (!elements.mobileToggle || !elements.mobileMenu) return;

    menuOpen = false;
    elements.mobileMenu.classList.remove("active");
    elements.mobileToggle.classList.remove("active");
    elements.mobileToggle.innerHTML = renderLucideIcon("menu");
    lucide.createIcons();
}

function toggleMobileMenu() {
    if (!elements.mobileToggle || !elements.mobileMenu) return;

    menuOpen = !menuOpen;
    elements.mobileMenu.classList.toggle("active", menuOpen);
    elements.mobileToggle.classList.toggle("active", menuOpen);
    elements.mobileToggle.innerHTML = menuOpen ? renderLucideIcon("x") : renderLucideIcon("menu");
    lucide.createIcons();
}

function initMobileMenu() {
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileToggle || !mobileMenu) return;

    let menuOpen = false;

    function setMobileMenuState(isOpen) {
        menuOpen = isOpen;

        mobileMenu.classList.toggle("active", menuOpen);
        mobileToggle.classList.toggle("active", menuOpen);

        mobileToggle.innerHTML = menuOpen ? renderLucideIcon("x") : renderLucideIcon("menu");

        lucide.createIcons();
    }

    mobileToggle.addEventListener("click", () => {
        setMobileMenuState(!menuOpen);
    });

    mobileMenu.addEventListener("click", (event) => {
        const clickedLink = event.target.closest("a");

        if (clickedLink) {
            setMobileMenuState(false);
        }
    });

    window.closeMobile = function closeMobile() {
        setMobileMenuState(false);
    };
}

function initReveals() {
    if (revealObserver) {
        revealObserver.disconnect();
    }

    revealObserver = new IntersectionObserver(
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
    document.addEventListener("click", (event) => {
        const anchor = event.target.closest('a[href^="#"]');

        if (!anchor) return;

        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function initLanguageToggle() {
    const languageToggle = document.getElementById("languageToggle");

    if (!languageToggle) return;

    languageToggle.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fa" : "en";
        localStorage.setItem("portfolioLang", currentLang);

        updateDocumentLanguage();
        updateLanguageToggle();
        renderPortfolio();
    });
}

function initPortfolio() {
    updateDocumentLanguage();
    updateLanguageToggle();

    renderPortfolio();

    initPreloader();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initLanguageToggle();
}

initPortfolio();
