import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { CarouselImage } from 'src/app/shared/interfaces/CarouselImage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public swalTargets = inject(SwalPortalTargets);

  @Input() title: string = '';
  @Input() heightImg: { [key: string]: string } = {};
  @Input() images: Array<CarouselImage> = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 5000;

  public faArrowCircleLeft = faArrowCircleLeft;
  public faArrowCircleRight = faArrowCircleRight;

  public selectedIndex: number = 0;
  private autoSlideInterval: any;

  @ViewChild('imageViewer') imageViewer!: SwalComponent;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  private autoSlideImages(): void {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  public selectImage(index: number): void {
    this.selectedIndex = index;
  }

  public onPrevClick(): void {
    this.selectedIndex =
      this.selectedIndex === 0
        ? this.images.length - 1
        : this.selectedIndex - 1;
  }

  public onNextClick(): void {
    this.selectedIndex =
      this.selectedIndex === this.images.length - 1
        ? 0
        : this.selectedIndex + 1;
  }

  public openModal() {
    clearInterval(this.autoSlideInterval);
    this.imageViewer.fire();
  }

  public closeModal() {
    this.autoSlideImages();
  }
}
