export type themeType = 'light' | 'dark';
export type timeThemeType = 'retro' | 'normal' | 'cyberpunk';

export enum Languages {
    EN = 'english',
    PT = 'portuguese'
}
export interface Settings {
    theme: themeType,
    timeTheme: timeThemeType,
    language: Languages
}

export const defaultSettings: Settings = {
    theme: "light",
    timeTheme: "normal",
    language: Languages.EN
}