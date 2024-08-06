export type CompanyTags = "" | "IBM Internal" | "AEP"  | "AT&T" | "PLEX (NTT Data)" | "Nextier" | "UBI" | "UBS" | "Cardinis Suite";
export class Company {
    name: CompanyTags;
    shortDescription: string;
    yearOfExperience: string;

    constructor() {
        this.name = "";
        this.shortDescription = "";
        this.yearOfExperience = "";
    }
}

export const companies: Map<CompanyTags, Company> = new Map([
    ['IBM Internal', { name: "IBM Internal", shortDescription: "IBM Internal Account or Projects", yearOfExperience: "2024" }],
    ['AEP', { name: "AEP", shortDescription: "American Eletric Power", yearOfExperience: "2024" }],
    ['AT&T', { name: "AT&T", shortDescription: "AT&T Communication company", yearOfExperience: "2022" }],
    ['PLEX (NTT Data)', { name: "PLEX (NTT Data)", shortDescription: "NTTData PLEX (NTT Data) (project phigital experience)", yearOfExperience: "2021"}],
    ['Nextier', { name: "Nextier", shortDescription: "Nextier Oil Field Solutions", yearOfExperience: "2020"}],
    ['UBI', { name: "UBI", shortDescription: "UBI bank", yearOfExperience: "2019"}],
    ['UBS', { name: "UBS", shortDescription: "UBS bank", yearOfExperience: "2017"}],
    ['Cardinis Suite', { name: "Cardinis Suite", shortDescription: "Software from GFT Italy", yearOfExperience: "2017"}],
]);





