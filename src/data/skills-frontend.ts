import { Skill } from "../app/pages/home/section/skills/skill.component.model";

export const skillsFrontend: Array<Skill> = [
    { 
        "type": 'fe',
        "name": "ReactJs",
        "level": 4,
        "content": `
            <p>I have substantial experience working with React.js, which has become a cornerstone of my front-end development toolkit. My expertise in React.js includes building dynamic and responsive user interfaces using its component-based architecture. I've leveraged React’s virtual DOM and efficient rendering capabilities to create fast, interactive web applications.</p>
            <p>In many of my projects, I have utilized Redux for state management, enabling a predictable state container that simplifies the handling of complex application states. My experience with Redux includes designing and implementing actions, reducers, and middleware to manage application state effectively. I've also used Redux Thunk and Redux Saga for handling asynchronous actions, making the flow of data within the application more efficient and easier to manage.</p>
            <p>For handling HTTP requests, I regularly use Axios, a powerful promise-based HTTP client. I’ve integrated Axios with React applications to interact with RESTful APIs, manage data fetching, and handle responses. My experience includes setting up Axios interceptors for managing authentication tokens, handling errors globally, and optimizing API requests to ensure smooth and secure communication between the client and server.</p>
            <p>Together, React.js, Redux, and Axios have enabled me to build scalable and maintainable applications with clean and efficient code. I am committed to using these tools to their full potential, staying current with best practices, and continuously improving the performance and reliability of the applications I develop.</p>
        `,
        "tags": ["UBS", "AT&T", "IBM Internal"]
    },
    { 
        "type": 'fe',
        "name": "HTML/CSS",
        "level": 3,
        "content": `
            <p>I have a strong foundation in HTML and CSS, which are essential tools in my front-end development work. My experience with HTML includes crafting well-structured, semantic markup that ensures accessibility and search engine optimization (SEO). I pay close attention to the details, using the right HTML elements to create clear and logical document structures that provide a solid base for styling and interaction.</p>
            <p>In terms of CSS, I have a deep understanding of modern layout techniques, including Flexbox and CSS Grid, which I use to create responsive and visually appealing designs that work seamlessly across different devices and screen sizes. I am proficient in writing clean and maintainable CSS, following best practices such as BEM (Block, Element, Modifier) naming conventions to ensure that styles are easy to manage and scale as projects grow.</p>
            <p>Additionally, I have extensive experience using SASS, a powerful CSS preprocessor that allows me to write more efficient and organized stylesheets. With SASS, I can use features like variables, nested rules, mixins, and functions to streamline my workflow and create modular, reusable code. This has been particularly useful in large projects where maintaining a consistent design system is crucial.</p>
            <p>By combining HTML, CSS, and SASS, I am able to build web interfaces that are not only visually appealing but also robust and maintainable. I continuously explore new techniques and stay updated with the latest advancements to ensure that my work meets the highest standards of modern web development.</p>
        `,
        "tags": ["IBM Internal", "AT&T", "PLEX (NTT Data)", "Nextier", "UBS", "UBI", "Cardinis Suite"]
    },
    { 
        "type": 'fe',
        "name": "Angular",
        "level": 3,
        "content": `
            <p>I have extensive experience working with the Angular framework, which has become one of my go-to tools for developing dynamic, single-page applications. My journey with Angular began in 2019, and over time, I have become proficient in leveraging its powerful features, such as two-way data binding, dependency injection, and the component-based architecture, to build scalable and maintainable applications.</p>
            <p>Throughout my projects, I have utilized Angular to create responsive and intuitive user interfaces, ensuring seamless user experiences across various devices. My experience includes integrating Angular with RESTful APIs, implementing state management with NgRx, and optimizing application performance through lazy loading and AOT (Ahead-of-Time) compilation.</p>
            <p>I am also well-versed in Angular's testing ecosystem, including Jasmine and Karma, ensuring that my applications are robust and reliable. Whether it's developing new features, refactoring existing code, or mentoring junior developers on best practices, I have consistently applied Angular's capabilities to deliver high-quality solutions that meet project requirements and exceed client expectations.</p>
        `,
        "tags": ["IBM Internal", "Nextier"]
    }
] 
