export interface CardInterface {
    title: string;
    date: string;
    role: string;
    description: string;
    image: string;
};

export interface ExperienceInterface {
    title: string;
    subtitle: string;
    caption: string;
    cards: Array<CardInterface>;
};