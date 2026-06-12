import { Palette, Code2, Rocket } from "lucide-react";

export const services = [
    {
        id: "01",
        key: "design",
        icon: Palette,
        tag: "Design",
        // the question a real visitor is silently asking
        question: "Will it look good and feel right?",
        title: "We make it look amazing",
        // the answer, in plain human words — no jargon
        description:
            "We decide how your website looks — the colours, the layout, where everything goes — so it feels modern, matches your brand, and is easy for anyone to use.",
        caption: "Sketching your layout",
        outcomes: ["A look that fits your brand", "Simple, easy-to-use pages", "See it before we build it"],
        image: "/banners/design-image.png",
        lottie: "/lottie/designing_in_progress.lottie",
    },
    {
        id: "02",
        key: "develop",
        icon: Code2,
        tag: "Build",
        question: "Will everything actually work?",
        title: "We build it to work perfectly",
        description:
            "We turn the design into a real website that loads fast and works on phones, tablets and computers — every button, form and page doing exactly what it should.",
        caption: "Writing the code",
        outcomes: ["Fast on every device", "Nothing broken or slow", "Easy to grow later"],
        image: "/banners/develop-image.png",
        lottie: "/lottie/programming_and_website.lottie",
    },
    {
        id: "03",
        key: "deploy",
        icon: Rocket,
        tag: "Launch",
        question: "How does it get online — and stay online?",
        title: "We put it live for the world",
        description:
            "We publish your website to the internet so anyone can visit it — safe, secure and quick. Then we keep watch so it stays online and keeps running smoothly.",
        caption: "Going live",
        outcomes: ["Live & ready for visitors", "Safe and secure", "We keep it running"],
        image: "/banners/deploy-image-4.jpeg",
        lottie: "/lottie/website_hosting.lottie",
    },
];
