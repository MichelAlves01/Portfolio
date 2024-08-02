export type SkillType = 'fe' | 'be' | '*' | 'none';
export class Skill {
    type: SkillType = 'none';
    name: string = ''; 
    level: number = 0;
    content: string = '';
}