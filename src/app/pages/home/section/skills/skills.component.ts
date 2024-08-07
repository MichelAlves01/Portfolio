import { Component, HostListener, Inject } from '@angular/core';
import { skillsFrontend } from '../../../../../data/skills-frontend';
import { SkillsBackend } from '../../../../../data/skills-backend';
import { skillsOther } from '../../../../../data/skills-others';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from "../../../../component/progress-bar/progress-bar.component";
import { SelectedSkill, Skill } from './skill.component.model';
import { MOBILE_MAX_WIDTH } from '../../../../app.constants';

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
  selectedSkill: SelectedSkill = new SelectedSkill(new Skill());
  emptySkill = new Skill();
  paneEffect = false;
  isMobileDevice = false;

  ngOnInit() {
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

  @HostListener("window:resize", ['$event'])
  handleResizeEvent(event: any) {
    this.setIsMobileDevice(event.target.innerWidth);
  }

  @HostListener("touchend", ['$event'])
  handleWindowOnloadEvent(event: any) {
    this.setIsMobileDevice(event.view.innerWidth);
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
          .slice(0, this.selectedSkill.level > 0 ? skillsList.length : 5);
  }

  filterList(skillsList: Array<Skill>) {
    return skillsList
          .sort((n1, n2) => n1.level - n2.level)
          .reverse()
          .slice(0, this.selectedSkill.level > 0 ? skillsList.length : 5);
  }

  private setIsMobileDevice(width: number) {
      this.isMobileDevice = width < MOBILE_MAX_WIDTH;
  }

}
