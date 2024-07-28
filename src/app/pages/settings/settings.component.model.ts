export type themeType = 'light' | 'dark';

export enum Languages {
    EN = 'english',
    PT = 'portuguese'
}
export interface Settings {
    theme: themeType,
    language: Languages
}

export const defaultSettings: Settings = {
    theme: "light",
    language: Languages.EN
}