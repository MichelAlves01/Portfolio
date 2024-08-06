import { companies, Company, CompanyTags } from "../../../../../data/companies-x";

export type SkillType = 'fe' | 'be' | '*' | 'none';
export class Skill {
    type: SkillType = 'none';
    name: string = ''; 
    level: number = 0;
    content: string = '';
    tags: Array<CompanyTags> = [];
}

export class SelectedSkill extends Skill {
    tagsPeriod: String;
    
    constructor(skill: Skill) {
        super()
        this.type = skill.type; 
        this.name = skill.name; 
        this.level = skill.level; 
        this.content = skill.content;
        this.tags = skill.tags;
        this.tagsPeriod = [...new Set(skill.tags.map((tag) => {
            return companies.get(tag)?.yearOfExperience || '';
        }))].sort().join(" | ");
    }


}