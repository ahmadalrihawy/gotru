# 1. GoTru Website Landing Page

This project is a Next.js implementation of the Gotru website's landing page. It features a modern, responsive design that adapts seamlessly to different screen sizes. The project leverages the powerful capabilities of Next.js, including both server-side and client-side rendering, to deliver a fast and efficient user experience. The flexible component-based architecture ensures easy customization and scalability.

# 2. Key Features:

    - Server-Side Rendering (SSR): Ensures fast load times and improved SEO by pre-rendering pages on the server.
    - Client-Side Rendering (CSR): Enhances interactivity and user experience by allowing dynamic updates without full page reloads.
    - Fully Flexible Components: Modular and reusable components make it easy to update and scale the landing page.
    - Responsive Design: The layout is fully responsive, providing an optimal viewing experience across a wide range of devices, from mobile phones to desktops.

# 3. Getting Started:

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmadalrihawy/Gotru.git
   cd Gotru
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

# 4. Usage

- Run `npm run build` to create an optimized production build.
- Deploy the project using Vercel or another hosting platform.

# 5. Folder Structure

```plaintext
├── app
│   ├── layout.jsx
│   ├── page.jsx
├── components
|   ├── Features
|   |── |── Features.jsx
│   ├── |── Features.module.css
|   ├── Footer
|   |── |── Footer.jsx
│   ├── |── Footer.module.css
|   ├── Hero
|   |── |── Hero.jsx
│   ├── |── Hero.module.css
|   ├── navBar
|   |── |── MobileLinks.jsx
│   ├── |── Nav.jsx
|   |── |── NavBar.module.css
│   ├── |── NavLinks.jsx
|   ├── Process
|   |── |── Process.jsx
│   ├── |── Process.module.css
|   |── |── ProcessCard.jsx
│   ├── |── ProcessCard.module.css
|   ├── ServicesComponents
|   |── |── Card.jsx
│   ├── |── Services.jsx
|   |── |── Services.module.css
│   ├── |── ServicesCard.module.css
|   ├── Technologies
|   |── |── techCards
|   |── |── |── BackendCards.jsx
|   |── |── |── Cards.module.css
|   |── |── |── CloudCards.jsx
|   |── |── |── DatabaseCards.jsx
|   |── |── |── FrontendCards.jsx
|   |── |── Tabs.jsx
│   ├── |── TechCards.jsx
|   |── |── Technologies.jsx
│   ├── |── TechnologiesTab.module.css
│   ├── |── Techonlogies.module.css
│   ├── HeroBtn.module.css
│   ├── HeroButton.jsx
├── public
├── styles
├── next.config.js
└── package.json
```

# 6. Challenges Faced

Throughout the development of the Gotru website landing page, the project progressed smoothly without major obstacles. However, a few potential challenges were anticipated and proactively addressed:

Responsive Design: Ensuring that the landing page maintained its visual appeal and functionality across various devices was a key concern. This was successfully managed by using a mobile-first design approach and thoroughly testing the layout on different screen sizes.

Component Reusability: To avoid redundancy and ensure consistency, special attention was given to creating highly reusable components. This strategy streamlined development and made the codebase easier to maintain.

While these challenges were anticipated, careful planning and the right tools helped avoid any significant issues, resulting in a smooth development process.
