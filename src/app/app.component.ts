import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GlobalService } from './service/global.service';
import { Languages } from './pages/settings/settings.component.model';

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
  language = 'En';
  tabs = ['', 'projects', 'settings']
  selectedTab = '';
  mousePositionStart = 0;
  mousePositionEnd = 0;

  constructor(private router: Router, private globalService: GlobalService) {
    this.globalService.switchColorSchema.subscribe({
      next: newValue => { 
        this.isDarkTheme = newValue.theme === 'dark';
        this.language = newValue.language === Languages.EN ? 'En' : 'Pt';
      }
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigateByUrl(tab);
  }

  @HostListener('window:touchstart', ['$event'])
  onTouchStartEvent(event: TouchEvent) {
    console.log('onTouchStartEvent event', event);
    this.mousePositionStart = event.touches[0].clientX;
  }

  @HostListener('window:touchend', ['$event'])
  onTouchEndEvent(event: TouchEvent) {
    
    this.mousePositionEnd = event.changedTouches[0].clientX;
    const selectedTabIndex = this.tabs.indexOf(this.selectedTab);
    const isDrag = Math.abs(Math.abs(this.mousePositionStart) - Math.abs(this.mousePositionEnd)) > 100;
    if (this.mousePositionStart > this.mousePositionEnd && isDrag) {
      console.log('onTouchEndEvent right', event);
      if (selectedTabIndex < (this.tabs.length-1)) this.selectedTab = this.tabs[selectedTabIndex+1];
      this.router.navigateByUrl(this.selectedTab);
    } else if (this.mousePositionStart < this.mousePositionEnd && isDrag) {
      if (selectedTabIndex > 0) this.selectedTab = this.tabs[selectedTabIndex-1];
      this.router.navigateByUrl(this.selectedTab);
    }
  }
}
