import { Component } from '@angular/core';
// import { GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test_slider';
  // images: GalleryItem[] = [];

  images = [
  {
    imageSrc:
    'assets/images/audiohero.png',
    imageAlt: 'banner1',
  },

  {
    imageSrc:
    'assets/images/banner1.svg',
    imageAlt: 'banner1',
  },

  {
    imageSrc:
    'assets/images/time.jpg',
    imageAlt: 'banner1',
  },

  ]

  ngOnInit() {
    // Set gallery items array
    // this.images = [
    //   new ImageItem({ src: 'https://media.istockphoto.com/photos/ships-wheel-in-park-picture-id1082366884?k=20&m=1082366884&s=612x612&w=0&h=PkvcHoi1bvDiFYDo3r1JeN8N_cTKc5ZWN3NlM_WpzHU=', thumb: 'IMAGE_THUMBNAIL_URL' }),
    //   new ImageItem({ src: 'https://media.istockphoto.com/photos/thanksgiving-concept-thanksgiving-note-pinned-by-an-orange-thumbtack-picture-id1344970661?b=1&k=20&m=1344970661&s=170667a&w=0&h=HZ6bqlcQCQEAERvYJBu3qDNhBOQD6f2GTBrOlwcaH-0=', thumb: 'IMAGE_THUMBNAIL_URL' }),
    //   new ImageItem({ src: 'https://media.istockphoto.com/photos/wall-clock-picture-id1308372943?b=1&k=20&m=1308372943&s=170667a&w=0&h=TjckQA_kaWUzDiQ157WgzNJ_231kkqzSHFbmJLNyGw0=', thumb: 'IMAGE_THUMBNAIL_URL' }),
      
    //   // ... more items
    // ];
  }

  // config: SwiperOptions = {
  //   autoplay: 3000, // Autoplay option having value in milliseconds
  //   initialSlide: 3, // Slide Index Starting from 0
  //   slidesPerView: 3, // Slides Visible in Single View Default is 1
  //   pagination: '.swiper-pagination', // Pagination Class defined
  //   paginationClickable: true, // Making pagination dots clicable
  //   nextButton: '.swiper-button-next', // Class for next button
  //   prevButton: '.swiper-button-prev', // Class for prev button
  //   spaceBetween: 30 // Space between each Item
  // };

}
