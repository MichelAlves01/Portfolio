import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GlobalService } from './service/global.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, CommonModule]
})
export class AppComponent {
  title = 'Portfolio';
  isDarkTheme = false;
  selectedTab = '';

  constructor(private router: Router, private globalService: GlobalService) {
    globalService.switchColorSchema.subscribe({
      next: newValue => this.isDarkTheme = newValue.isDark
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigateByUrl(tab);
  }
}
