import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/ttaekgeun",
        linkTitle: `Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:taekgeun9025@gmail.com",
        linkTitle: `Email`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0009-0000-2287-9595",
        linkTitle: `ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/taekgeun-you-56b5b53a2/",
        linkTitle: `LinkedIn`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    ORCID: "ORCID",
};