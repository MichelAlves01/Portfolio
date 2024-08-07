import { Skill } from "../app/pages/home/section/skills/skill.component.model";

export const SkillsBackend: Array<Skill>  = [
    { 
        "type": 'be',
        "name": "Database SQL/NOSQL",
        "level": 4,
        "content": `
            <p>First experiences with <b>Postgres</b> database for the developing the my College project for thesis</p>
            <p>My first professional experience with Database was with <b>Oracle</b> database creating some Procedures with queries for a project of UBI</p>
            <p>After I had other experience with SQL database <b>MySql</b></p>
            <p>While working on project PLEX from NTTData the database used was MongoDB which gave some experince with NoSql databases</p>
        `,
        "tags": ["UBI", "PLEX (NTT Data)", "AEP", "IBM Internal"]
    },
    { 
        "type": 'be',
        "name": "Python",
        "level": 1,
        "content": `
            <p>I had a basic experience with Python developing some cronjobs on <b>Google Cloud</b> to migrate data from one table to a history table</p>
            <p>A part from this experince I create a personal project for generate a supermarket shopping list where I used <b>Flask</b> 
            framework to implement the endpoint and <b>Pony ORM</b> to access databse</p>
        `,
        "tags": ["PLEX (NTT Data)"]
    },
    { 
        "type": 'be',
        "name": "Architecture",
        "level": 3,
        "content": `
            <p>During my carear I discovery patterns and structures to build modern and stable applications </p>
            <p>since then I've applyied to understand and learn more on how we can build more stable and scalable applications using architectures</p>
            <p>At first momment I learn about MVC pattern because it was implemented in the projects that I was working</p>
            <p>Then I start learning about <b>SOLID</b> principles which lead me to read the book <b>Clean Architecture</b> and learn more about this architecture</p>
            <p>Actualy I keep studying some principles with <b>Domain Driven Design</b></p>
            <p>Defining the system architecture is one of parts on software development that I enjoy working.</p>
            p - missed Microservices / swagger
        `,
        "tags": ["IBM Internal" , "AEP"  , "AT&T" , "PLEX (NTT Data)" , "UBI" , "UBS" , "Cardinis Suite"]
    },
    { 
        "type": 'be',
        "name": "Java 8/11",
        "level": 4,
        "content": `
            <p>I used <b>Java</b> since the beginning of my carear in 2014 when I was Intern at GFT Brazil.</p>
            <p>Since then I back to work with Java some times during my carear, my last experince was 2024 working also with Spring boot and Maven.</p>
            <p>I Always look to keep studying new feature of the new versions of Java and Always study bit more about Java core concepts.</p>
            <p>I am able to work with Java creating a new Api with <b>Spring boot</b> and <b>Maven</b>.</p>
        `,
        "tags": ["IBM Internal", "AT&T", "PLEX (NTT Data)", "UBI", "UBS", "Cardinis Suite"]
    },
    { 
        "type": 'be',
        "name": "NodeJs",
        "level": 5,
        "content": `
            <p>The main experience I had with <b>NodeJs 18</b> was working for AEP Projects developing microservices using the <b> Express</b> Framework.</p>
            <p>Then I had an experience with <b>NestJs</b> Framework in a project o AT&T creating some endpoint and creating some database queries with <b>TypeORM</b></p>        
            <p>Before it my first experience with NodeJs was at the Project PLEX (NTT Data), where I worked with the maintenance of the microservice designated to control user access, the experience was maintaining this service.</p>
            <p>Working with NodeJs I had the oportunity to improve my skills with <b>Javascript</b> and <b>Typescript</b>.</p>
        `,
        "tags": ["AEP", "PLEX (NTT Data)"]
    },
]