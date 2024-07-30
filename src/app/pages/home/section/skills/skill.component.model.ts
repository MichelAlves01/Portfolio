export type SkillType = 'fe' | 'be' | '*';
export class Skill {
    type: SkillType = '*';
    name: string = ''; 
    level: number = 0;
    content: string = '';
}