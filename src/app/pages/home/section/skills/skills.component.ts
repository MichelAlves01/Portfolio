import { Component, HostListener } from '@angular/core';
import { skillsFrontend } from '../../../../../data/skills-frontend';
import { SkillsBackend } from '../../../../../data/skills-backend';
import { skillsOther } from '../../../../../data/skills-others';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from "../../../../component/progress-bar/progress-bar.component";
import { Skill } from './skill.component.model';

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
  selectedSkill: Skill = new Skill();
  paneEffect = false;

  ngOnInit() {
    this.getFrontEndSkills();
    this.getBackEndSkills();
    this.getOthersSkills();
  }

  getFrontEndSkills() {
    this.frontendSkills = this.filterList(skillsFrontend)
  }

  getBackEndSkills() {
    this.backendSkills = this.filterList(SkillsBackend);
  }

  getOthersSkills() {
    this.othersSkills = this.filterList(skillsOther);
  }

  handleSkillSelection(skill: Skill) {
      this.setPaneEffect();

      if (skill.name === this.selectedSkill.name) {
        this.selectedSkill = new Skill();
      } else {
        this.selectedSkill = skill;
      }
      this.showAllSkills = true;
  }

  private setPaneEffect() {
    if (this.selectedSkill.level > 0) {
      this.paneEffect = true;
      setTimeout(() => this.paneEffect = false, 500);
    }
  }

  handleShowAllSkills() {
    this.showAllSkills = !this.showAllSkills;
  }

  @HostListener("window:keydown", ['$event'])
  handleArrowDownEvent(event: KeyboardEvent) {
    event.preventDefault();

    const isArrayDownEvent = event.key === "ArrowDown";
    const isArrayUpEvent = event.key === "ArrowUp";
    const isSkillChangeEvent = isArrayDownEvent || isArrayUpEvent ;

    if (isSkillChangeEvent) {
      let skills = [];
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
      this.updateSelectedSkillOnKeyDown(isArrayDownEvent, isArrayUpEvent, skills);
    }

  }

  private updateSelectedSkillOnKeyDown(isArrayDownEvent: boolean, isArrayUpEvent: boolean, skills: Array<Skill>) {
    if (isArrayDownEvent) {
      const skillIndex = skills.indexOf(this.selectedSkill);
      const nextSkill = skills[skillIndex + 1];
      if (nextSkill.name !== this.selectedSkill.name) this.setPaneEffect();
      this.selectedSkill = nextSkill || this.selectedSkill;
    } else if (isArrayUpEvent) {
      const skillIndex = skills.indexOf(this.selectedSkill);
      const prevSkill = skills[skillIndex - 1];
      if (prevSkill.name !== this.selectedSkill.name) this.setPaneEffect();
      this.selectedSkill = prevSkill || this.selectedSkill;
    }
  }

  filterList(skillsList: Array<Skill>) {
    return skillsList
          .sort((n1, n2) => n1.level - n2.level)
          .reverse()
          .slice(0, this.showAllSkills ? skillsList.length : 5);
  }

}
