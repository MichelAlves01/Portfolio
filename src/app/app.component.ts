import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from "./section/skills/skills.component";
import { SectorsXComponent } from './section/sectors-x/sectors-x.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SkillsComponent, SectorsXComponent]
})
export class AppComponent {
  title = 'Portfolio';
}
