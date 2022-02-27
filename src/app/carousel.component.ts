import { Component, Input, OnInit } from '@angular/core';
 
interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

  interface CarouselModel {
    story: string,
    title: string,
    
  }


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() autoSlide = true;
  @Input() slideIntervals = 3000; //default to 3 seconds

  
  

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  //changes slides
  autoSlideImages(): void {
    setInterval(() => {
      
    }, this.slideIntervals);
  }

  //sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  stories: CarouselModel[] = [
    {
      story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      title: 'Join Service'
    },
    
  ]

}
