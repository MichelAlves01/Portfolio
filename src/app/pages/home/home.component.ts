import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './section/skills/skills.component';
import { SectorsXComponent } from './section/sectors-x/sectors-x.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SkillsComponent, SectorsXComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  openLinkedinProfile() {
      window.open('https://www.linkedin.com/in/michel-alves-bb40b463/', '_blank');
  }

  openGitHubProfile() {
    window.open('https://github.com/MichelAlves01', '_blank');
  }

}
