# Dynamic Personal Portfolio

A modern, minimalist, responsive personal portfolio website built with **HTML, CSS, and JavaScript**.

This portfolio is designed to be easy to customize. All portfolio content is stored in one file, `data.js`, so anyone can update the website without editing the main HTML structure.

The portfolio supports:

- Dynamic content rendering
- English and Dari language modes
- RTL layout support for Dari
- Responsive mobile design
- Animated mobile menu
- Preloader
- Lucide icons
- Dynamic project links
- Dynamic contact links
- Clean section-based structure

---

## Preview

This portfolio includes the following sections:

1. **Navigation**
    - Logo
    - Desktop menu
    - Mobile burger menu
    - Language toggle button

2. **Hero Section**
    - Background image
    - Name
    - Role/title
    - Short description
    - CTA buttons

3. **About Section**
    - Short professional introduction
    - Multiple editable paragraphs

4. **Skills Section**
    - Skill categories
    - Icons
    - Bullet lists for each skill group

5. **Projects Section**
    - Project cards
    - Project title
    - Project description
    - Tech stack tags
    - Project icons
    - GitHub/GitLab/Live Demo links
    - Maximum visible project limit

6. **Focus Section**
    - Current learning or development focus
    - Icon, title, and description for each item

7. **Experience Section**
    - Timeline-style experience list
    - Date-based ordering
    - Title, subtitle, date, and description

8. **Approach Section**
    - Personal development philosophy
    - Principles
    - Goals text

9. **Services Section**
    - Services offered
    - Icon, title, and description for each service

10. **Contact Section**

- Contact message
- Email, GitHub, GitLab, LinkedIn, Resume, or other links

11. **Footer**

- Copyright text
- Role/title
- Footer links

---

## Project Structure

```bash
portfolio/
├── index.html
├── style.css
├── data.js
├── main.js
├── README.md
└── assets/
    └── images/
        └── hero_background.png
```

### File Description

| File             | Purpose                                                            |
| ---------------- | ------------------------------------------------------------------ |
| `index.html`     | Main HTML structure of the website                                 |
| `style.css`      | All styling, layout, responsive design, animations, and RTL styles |
| `data.js`        | All editable portfolio content                                     |
| `main.js`        | JavaScript render functions and interactions                       |
| `assets/images/` | Portfolio images such as the hero background                       |
| `README.md`      | Project documentation                                              |

---

## How to Use This Portfolio

### 1. Download or Clone the Project

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

Then open the project folder:

```bash
cd your-repository-name
```

Or download manually:

1. Open the GitHub repository.
2. Click the green **Code** button.
3. Click **Download ZIP**.
4. Extract the ZIP file.
5. Open the folder in VS Code.

---

## How to Run Locally

Because this project uses multiple JavaScript files, it is better to run it with a local server.

From the project folder, run:

```bash
python3 -m http.server 5500
```

Then open this in your browser:

```txt
http://localhost:5500
```

You can also use the VS Code **Live Server** extension.

---

## How to Customize the Portfolio

Most changes should be made in:

```bash
data.js
```

The website content is stored inside the `portfolioData` object.

The project supports two languages:

```js
const portfolioData = {
    en: {
        // English content
    },

    fa: {
        // Dari content
    },
};
```

---

## Updating the Hero Section

In `data.js`, find:

```js
hero: {
    image: "./assets/images/hero_background.png",
    imageAlt: "Your Name",
    label: "Backend Developer",
    name: "Your Name",
    role: "Building clean, scalable systems.",
    description: "Short description about you.",
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
```

You can update:

- Hero image
- Name
- Role
- Description
- Button text
- Button links

To change the hero image, place your image inside:

```bash
assets/images/
```

Then update the image path:

```js
image: "./assets/images/your-image-name.png",
```

---

## Updating Navigation Links

In `data.js`, find:

```js
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
```

You can add, remove, or rename navigation links.

Make sure the `url` matches a section ID in `index.html`.

Example:

```js
{ label: "Services", url: "#services" }
```

---

## Updating the About Section

In `data.js`, find:

```js
about: {
    label: "About",
    heading: "About Me",
    paragraphs: [
        "First paragraph.",
        "Second paragraph.",
        "Third paragraph.",
    ],
},
```

You can add more paragraphs by adding more strings inside the `paragraphs` array.

HTML tags such as `<strong>` and `<em>` are supported:

```js
"I build <strong>production-ready</strong> backend systems.";
```

---

## Updating Skills

In `data.js`, find:

```js
skills: {
    label: "Skills",
    heading: "My Skills",
    items: [
        {
            title: "Backend",
            icon: "server",
            bullets: ["NestJS", "Node.js", "Express.js"],
        },
    ],
},
```

Each skill card supports:

- `title`
- `icon`
- `bullets`

Example:

```js
{
    title: "DevOps",
    icon: "cloud",
    bullets: ["Docker", "Railway", "GitHub Actions"],
}
```

Icons use [Lucide Icons](https://lucide.dev/icons/). Use the icon name as a string.

---

## Updating Projects

In `data.js`, find:

```js
projects: {
    label: "Projects",
    heading: "Featured Projects",
    maxVisible: 5,
    items: [
        {
            title: "Project Name",
            icon: "landmark",
            description: "Project description.",
            tags: ["NestJS", "Prisma", "PostgreSQL"],
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
    ],
},
```

Each project supports:

- `title`
- `icon`
- `description`
- `tags`
- `order`
- `github` link
- `gitlab` link
- `demo` link

If a link is empty, it will not appear in the UI:

```js
url: "",
```

To show a link, add the URL:

```js
url: "https://github.com/your-username/project-name",
```

Projects are sorted using the `order` field.

The portfolio shows a maximum number of projects based on:

```js
maxVisible: 5,
```

---

## Updating Focus Section

In `data.js`, find:

```js
focus: {
    label: "Current Focus",
    heading: "What I'm Focused On",
    items: [
        {
            title: "Clean Architecture",
            icon: "layers",
            description: "Description here.",
        },
    ],
},
```

Each focus card supports:

- `title`
- `icon`
- `description`

---

## Updating Experience

In `data.js`, find:

```js
experience: {
    label: "Experience",
    heading: "My Experience",
    items: [
        {
            title: "Backend Developer",
            subtitle: "Company or Project Name",
            date: "2024 — Present",
            sortDate: "2024-01-01",
            description: "Experience description.",
        },
    ],
},
```

Each experience item supports:

- `title`
- `subtitle`
- `date`
- `sortDate`
- `description`

The visible date is:

```js
date: "2024 — Present";
```

The sorting date is:

```js
sortDate: "2024-01-01";
```

Experience items are sorted newest first.

---

## Updating Approach Section

In `data.js`, find:

```js
approach: {
    label: "Approach & Goals",
    heading: "My Approach",
    quote: "Main quote here.",
    goalsText: "Goal text here.",
    items: [
        {
            title: "Build Incrementally",
            subtitle: "",
            description: "Description here.",
            order: 1,
        },
    ],
},
```

Each approach card supports:

- `title`
- `subtitle`
- `description`
- `order`

Cards are sorted by `order`.

---

## Updating Services

In `data.js`, find:

```js
services: {
    label: "Services",
    heading: "What I Offer",
    items: [
        {
            title: "API Development",
            icon: "plug",
            description: "Description here.",
        },
    ],
},
```

Each service card supports:

- `title`
- `icon`
- `description`

---

## Updating Contact Links

In `data.js`, find:

```js
contact: {
    label: "Contact",
    heading: "Let's build something reliable.",
    description: "Contact description.",
    links: [
        {
            label: "Email",
            url: "mailto:hello@example.com",
            icon: "mail",
            type: "email",
        },
        {
            label: "GitHub",
            url: "https://github.com",
            icon: "github",
            type: "external",
        },
    ],
},
```

Each contact link supports:

- `label`
- `url`
- `icon`
- `type`

For email:

```js
url: "mailto:your-email@example.com",
type: "email",
```

For external links:

```js
type: "external",
```

If the URL is empty, the link will not appear.

---

## Updating the Footer

In `data.js`, find:

```js
footer: {
    text: "© 2026 Your Name",
    highlight: "·",
    role: "Backend Developer",
    links: [
        {
            label: "Top",
            url: "#hero",
            type: "internal",
        },
    ],
},
```

You can update:

- Copyright text
- Role text
- Footer links

---

## Language Support

This portfolio supports:

- English
- Dari

The language toggle button switches between:

```js
en;
fa;
```

Language preference is saved in `localStorage`, so the selected language remains after refreshing the page.

Dari mode uses:

```html
dir="rtl"
```

This enables right-to-left layout behavior.

---

## Adding More Languages

To add another language, add a new object inside `portfolioData`.

Example:

```js
const portfolioData = {
    en: {
        // English content
    },

    fa: {
        // Dari content
    },

    ar: {
        // Arabic content
    },
};
```

Then update the language switch logic in `main.js`.

---

## Icons

This project uses **Lucide Icons**.

Example:

```js
icon: "server";
```

You can find icon names here:

```txt
https://lucide.dev/icons/
```

Some brand icons like GitHub, GitLab, and LinkedIn are handled manually in `main.js`.

---

## Styling

All styles are inside:

```bash
style.css
```

Common things to customize:

### Main accent color

Search for:

```css
#00adb5
```

Replace it with your preferred color.

### Background color

Search for:

```css
#0b0b0c
```

### Mobile styles

Mobile styles are inside:

```css
@media (max-width: 900px) {
    ...
}
```

and:

```css
@media (max-width: 480px) {
    ...
}
```

---

## Deployment

This is a static website, so it can be hosted for free on:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

---

## Deploying to GitHub Pages

1. Push your project to GitHub.

```bash
git add .
git commit -m "Add portfolio website"
git push
```

2. Open your GitHub repository.
3. Go to **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose:
    - Source: `Deploy from a branch`
    - Branch: `main`
    - Folder: `/root`

6. Click **Save**.

Your portfolio will be live at:

```txt
https://your-username.github.io/your-repository-name/
```

---

## Important Notes

### Use relative paths

Correct:

```js
image: "./assets/images/hero_background.png";
```

Wrong:

```js
image: "/home/user/Desktop/image.png";
```

Local computer paths will not work after deployment.

### Keep `data.js` before `main.js`

In `index.html`, scripts must be loaded in this order:

```html
<script src="./data.js"></script>
<script src="./main.js"></script>
```

Do not reverse them, because `main.js` depends on `portfolioData` from `data.js`.

---

## Browser Support

This portfolio works in modern browsers including:

- Chrome
- Firefox
- Edge
- Safari

---

## Recommended Workflow

After making changes:

```bash
git status
git add .
git commit -m "Describe your change"
git push
```

Run locally before deploying:

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

---

## License

You can use this portfolio as a personal portfolio template.

Feel free to customize the content, colors, images, sections, and layout for your own personal or professional use.

If you like consider rating with stars.
