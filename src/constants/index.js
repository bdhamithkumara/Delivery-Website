import {HomeOne,AboutOne,AboutTwo,ServiceOneOne,ServiceOneTwo,ServiceOneThree,ServiceTwo} from '../assets';

export const navLinks = [
    {
        id:"home",
        title:"Home",
    },
    {
        id:"about",
        title:"About Us",
    },
    {
        id:"service",
        title:"Services",
    },
    {
        id:"contact",
        title:"Contact Us",
    },
];

export const services = [
    {
        id:"paymentdone",
        title:"Payment Done",
        imag:ServiceOneOne, 
        cont:"Pay with a Visa or PayPal card and without much ado.", 
        lrnmore:"Learn More",
    },
    {        id:"findyourproduct",
            title:"Find Your Product",
            imag:ServiceOneTwo, 
            cont:"We offer sale of products through the internet.", 
            lrnmore:"Learn More",
    },
    {
        id:"productreceived",
            title:"Product Received",
            imag:ServiceOneThree, 
            cont:"In our app you can see the delay time of your order.", 
            lrnmore:"Learn More",
    },
];

export const footerLinks = [
    {
        title : "Our Services",
        links : [
            {
                name: "Pricing",
                link: "#",
            },
            {
                name: "Discounts",
                link: "#",
            },
            {
                name: "Report a bug",
                link: "#",
            },

            
        ],
    },
    {
        title : "Our Company",
        links : [
            {
                name: "Blog",
                link: "#",
            },
            {
                name: "Our Mission",
                link: "#",
            },
            {
                name: "Get in touch",
                link: "#",
            },
        ],
    },
    {
        title : "Community",
        links : [
            {
                name: "Support",
                link: "#",
            },
            {
                name: "Questions",
                link: "#",
            },
            {
                name: "Help",
                link: "#",
            },
        ],
    },
];

