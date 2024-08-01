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

  changeLanguage(selected: any) {
    this.settings.language = selected.target.value;
    this.globalService.switchColorSchema.next({
      ...this.settings
    })
  }
}
