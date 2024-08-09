import { Component } from '@angular/core';
import { GlobalService } from '../../service/global.service';
import { Languages, Settings, defaultSettings, timeThemeType } from './settings.component.model';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  settings: Settings = defaultSettings;
  
  constructor(private globalService: GlobalService) {}

  changeColor() {
    this.settings.theme = this.settings.theme === 'light' ? 'dark' : 'light';
    this.settings.timeTheme = 'normal';
    this.globalService.switchColorSchema.next({
      ...this.settings
    })
  }

  changeTimeTheme(selectedTheme: timeThemeType) {
    this.settings.timeTheme = selectedTheme;
    switch (this.settings.timeTheme) {
      case 'retro': 
        this.settings.theme = 'light';
        break;
      case 'cyberpunk':
        this.settings.theme = 'dark';
        break;
      default:
        this.settings.theme = 'light';
    }
    this.globalService.switchColorSchema.next({
      ...this.settings
    })
  }

  changeLanguage(selected: any) {
    this.settings.language = selected.target.value;
    this.globalService.switchColorSchema.next({
      ...this.settings
    })
  }
}
