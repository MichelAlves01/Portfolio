import { Component } from '@angular/core';
import { skillsFrontend } from '../../../../../data/skills-frontend';
import { SkillsBackend } from '../../../../../data/skills-backend';
import { skillsOther } from '../../../../../data/skills-others';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from "../../../../component/progress-bar/progress-bar.component";

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [CommonModule, ProgressBarComponent]
})
export class SkillsComponent {
  showAllSkills: boolean = false;

  getFrontEndSkills() {
    return this.filterList(skillsFrontend)
  }

  getBackEndSkills() {
    return this.filterList(SkillsBackend);
  }

  getOthersSkills() {
    return this.filterList(skillsOther);
  }

  handleShowAllSkills() {
    this.showAllSkills = !this.showAllSkills;
  }

  filterList(skillsList: Array<{name: string, level: number}>) {
    return skillsList.sort((n1, n2) => n1.level - n2.level).reverse().slice(0, this.showAllSkills ? skillsList.length : 5);
  }

}
