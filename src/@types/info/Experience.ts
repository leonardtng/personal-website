export interface CardDialogImageInterface {
    caption: string;
    image: string;
};

export interface CardDialogContentInterface {
    carousel: Array<CardDialogImageInterface>;
    infoTitle: string;
    infoItems: Array<string>;
};

export interface CardDataInterface {
    title: string;
    date: string;
    role: string;
    description: string;
    image: string;
    cardDialogContent: CardDialogContentInterface;
};

export interface ExperienceInterface {
    title: string;
    subtitle: string;
    caption: string;
    cards: Array<CardDataInterface>;
};