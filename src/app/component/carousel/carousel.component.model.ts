export class Slide {
    legend: string;
    imagePath: string;
    description: string;

    constructor() {
        this.legend = '';
        this.imagePath = '';
        this.description = '';
    }
}

export class SelectedSlide extends Slide {
    index: number = 0;
}