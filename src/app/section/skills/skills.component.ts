import { Component } from '@angular/core';
import { skillsFrontend } from '../../../data/skills-frontend';
import { SkillsBackend } from '../../../data/skills-backend';
import { skillsOther } from '../../../data/skills-others';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from "../../component/progress-bar/progress-bar.component";

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [CommonModule, ProgressBarComponent]
})
export class SkillsComponent {

  getFrontEndSkills() {
    return skillsFrontend;
  }

  getBackEndSkills() {
    return SkillsBackend;
  }

  getOthersSkills() {
    return skillsOther;
  }
}
