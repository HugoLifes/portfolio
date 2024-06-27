import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Adcom',
        description: "I built an app to manage your private home, check your debts, pay utilities, schedule services and have customer support quickly and efficiently.",
        tools: ['Flutter', 'AdobeXd', 'JWT', 'NodeJS', 'Postgres', 'OneSignal', 'Github Actions', 'Kotlin', 'Swift'],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'DataFire',
        description: 'I built an app to manage companies and help them manage their expenses, employees and projects they are working on.',
        tools: ['Flutter', 'JavaScript', "Docker", "NodeJS", "TypeScript", "Postgres", "AWS", "JWT"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'IA Detection Vehicle Directional ',
        description: 'I built a real-time detection based on AI, to carry out vehicle gauging or road impact studies and help the civil engineering branch ',
        tools: ['Python', 'NodeJS', 'ultralitycs', 'DeepSort', 'AWS'],
        code: '',
        role: 'Software Engineer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Store',
        description: "My team and I developed an app for selling multiple articles, like clothes, chairs, lamps, table and lot of things for personal use or home decor",
        tools: ['NodeJS', 'Material 3', 'Flutter', 'Bloc', "Docker",],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },