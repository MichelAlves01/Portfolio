import { Component } from '@angular/core';
import { GlobalService } from '../../service/global.service';
import { Languages, Settings, defaultSettings } from './settings.component.model';

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
    this.globalService.switchColorSchema.next({
      ...this.settings
    })
  }

  changeLanguage() {
    this.settings.language = this.settings.language === Languages.EN ? Languages.PT : Languages.EN;
    this.globalService.switchColorSchema.next({
      ...this.settings
    })
  }
}
