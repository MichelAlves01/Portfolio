import { Component } from '@angular/core';
import { GlobalService } from '../../service/global.service';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private globalService: GlobalService) {}
  private isDark = false;

  changeColor() {
    this.isDark = !this.isDark;
    this.globalService.switchColorSchema.next({
      isDark: this.isDark
    })
  }
}
