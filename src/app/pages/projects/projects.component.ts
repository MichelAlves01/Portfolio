import { Component } from '@angular/core';
import { CarouselComponent } from '../../component/carousel/carousel.component';
import { Slide } from '../../component/carousel/carousel.component.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  slides: Array<Slide>;

  constructor(private router: Router) {
    this.slides = [
      {
        legend: 'First image',
        imagePath: 'assets/scout.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
      },
      {
        legend: 'Second image',
        imagePath: 'assets/bazaar.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
      },
      {
        legend: 'Third image',
        imagePath: 'assets/origin.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
      }
    ]
  }

  handleNavigateTo(url: string) {
    //this.router.navigateByUrl(url);
    window.open(url, '_blank');
  }

}
