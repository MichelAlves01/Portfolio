import { Component } from '@angular/core';
import { sectorsX } from '../../../../../data/sectors-x';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sectors-x',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors-x.component.html',
  styleUrl: './sectors-x.component.scss'
})
export class SectorsXComponent {

  getSectorsX() {
    return sectorsX;
  }
}
