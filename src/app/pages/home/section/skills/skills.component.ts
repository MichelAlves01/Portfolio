import { Component, HostListener } from '@angular/core';
import { skillsFrontend } from '../../../../../data/skills-frontend';
import { SkillsBackend } from '../../../../../data/skills-backend';
import { skillsOther } from '../../../../../data/skills-others';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from "../../../../component/progress-bar/progress-bar.component";
import { SelectedSkill, Skill } from './skill.component.model';

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [CommonModule, ProgressBarComponent]
})
export class SkillsComponent {
  frontendSkills: Array<Skill> = [];
  backendSkills: Array<Skill> = [];
  othersSkills: Array<Skill> = [];
  showAllSkills: boolean = false;
  selectedSkill: SelectedSkill = new SelectedSkill(new Skill());
  emptySkill = new Skill();
  paneEffect = false;

  ngOnInit() {
    //this.showAllSkills = true;
    this.setupAllSkill();
    //this.selectedSkill = new SelectedSkill(this.backendSkills[2]);
  }

  getFrontEndSkills() {
    this.frontendSkills = this.frontendSkills.length > 0 ? this.updateList(skillsFrontend) : this.filterList(skillsFrontend)
  }

  getBackEndSkills() {
    this.backendSkills = this.backendSkills.length > 0 ? this.updateList(SkillsBackend) : this.filterList(SkillsBackend);
  }

  getOthersSkills() {
    this.othersSkills = this.othersSkills.length > 0 ? this.updateList(skillsOther) : this.filterList(skillsOther)
  }

  handleSkillSelection(skill: Skill) {
      this.setPaneEffect();

      if (skill.name === this.selectedSkill.name) {
        this.selectedSkill = new SelectedSkill(new Skill());
        this.setupAllSkill();
      } else {
        const prevSkill = this.selectedSkill;
        this.selectedSkill = new SelectedSkill(skill);
        if (prevSkill.level === 0) {
          this.setupAllSkill();
        }
      }


  }

  private setPaneEffect() {
    if (this.selectedSkill.level > 0) {
      this.paneEffect = true;
      setTimeout(() => this.paneEffect = false, 500);
    }
  }

  private setupAllSkill() {
    this.getFrontEndSkills();
    this.getBackEndSkills();
    this.getOthersSkills();
  }

  handleShowAllSkills() {
    this.showAllSkills = !this.showAllSkills;
    this.setupAllSkill();
  }

  @HostListener("window:keydown", ['$event'])
  handleArrowDownEvent(event: KeyboardEvent) {
    event.preventDefault();

    const isArrayDownEvent = event.key === "ArrowDown";
    const isArrayUpEvent = event.key === "ArrowUp";
    const isSkillChangeEvent = isArrayDownEvent || isArrayUpEvent ;

    if (isSkillChangeEvent) {
      let skills: Array<Skill> = [];
      switch(this.selectedSkill.type) {
        case 'fe':
          skills = this.frontendSkills;
          break;
        case 'be':
          skills = this.backendSkills;
          break;
          case '*':
          skills = this.othersSkills;

      }
      if (skills.length > 0) {
        this.updateSelectedSkillOnKeyDown(isArrayDownEvent, isArrayUpEvent, skills);
      }
    }

  }

  private updateSelectedSkillOnKeyDown(isArrayDownEvent: boolean, isArrayUpEvent: boolean, skills: Array<Skill>) {
    if (isArrayDownEvent) {
          const skillIndex = skills.indexOf(this.selectedSkill);
          const nextSkill = skills[skillIndex + 1];
        
          if (nextSkill.name !== this.selectedSkill.name) { 
            this.setPaneEffect();
          }
          this.selectedSkill = new SelectedSkill(nextSkill) || this.selectedSkill;
        } else if (isArrayUpEvent) {
          const skillIndex = skills.indexOf(this.selectedSkill);
          const prevSkill = skills[skillIndex - 1];
          
          if (prevSkill.name !== this.selectedSkill.name) {
            this.setPaneEffect();
          }
          this.selectedSkill = new SelectedSkill(prevSkill) || this.selectedSkill;
        }
  }

  updateList(skillsList: Array<Skill>) {
    return skillsList
          .slice(0, this.showAllSkills || this.selectedSkill.level > 0 ? skillsList.length : 5);
  }

  filterList(skillsList: Array<Skill>) {
    return skillsList
          .sort((n1, n2) => n1.level - n2.level)
          .reverse()
          .slice(0, this.showAllSkills || this.selectedSkill.level > 0 ? skillsList.length : 5);
  }

}
