export interface AbilityInterface {
    legend: string;
    value: number;
};

export interface SubsectionsInterface {
    stack: {
        title: string;
    },
    skills: {
        title: string;
        itemsBlockLeft: Array<AbilityInterface>;
        itemsBlockRight: Array<AbilityInterface>;
    },
    languages: {
        title: string;
        itemsBlockLeft: Array<AbilityInterface>;
        itemsBlockRight: Array<AbilityInterface>;
    }
    tools: {
        title: string;
        itemsBlockLeft: Array<AbilityInterface>;
        itemsBlockRight: Array<AbilityInterface>;
    }
};

export interface AbilitiesInterface {
    title: string;
    description: string;
    subsections: SubsectionsInterface;
};