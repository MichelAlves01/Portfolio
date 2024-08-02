import { Component, Input, OnInit } from '@angular/core';
import { SelectedSlide, Slide } from './carousel.component.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
    @Input() slides: Array<Slide> = new Array();

    selectedSlide: SelectedSlide = new SelectedSlide();

    ngOnInit() {
      this.selectedSlide = { ...this.slides[0], index: 0 };
    }

    prevSlide() {
      const indexPrevious = this.selectedSlide.index > 0 ? this.selectedSlide.index - 1 : 0;
      this.selectedSlide = { ...this.slides[indexPrevious], index: indexPrevious };
    }

    nextSlide() {
      const indexNext = this.selectedSlide.index < this.slides.length-1 ? this.selectedSlide.index + 1 : this.slides.length-1;
      this.selectedSlide = { ...this.slides[indexNext], index: indexNext };
    }
}
