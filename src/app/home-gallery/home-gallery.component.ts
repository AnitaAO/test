import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

 constructor() { }

  images: GalleryItem[] = [];

  ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: 'https://media.istockphoto.com/photos/ships-wheel-in-park-picture-id1082366884?k=20&m=1082366884&s=612x612&w=0&h=PkvcHoi1bvDiFYDo3r1JeN8N_cTKc5ZWN3NlM_WpzHU=', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'https://media.istockphoto.com/photos/thanksgiving-concept-thanksgiving-note-pinned-by-an-orange-thumbtack-picture-id1344970661?b=1&k=20&m=1344970661&s=170667a&w=0&h=HZ6bqlcQCQEAERvYJBu3qDNhBOQD6f2GTBrOlwcaH-0=', thumb: 'IMAGE_THUMBNAIL_URL' }),
      new ImageItem({ src: 'https://media.istockphoto.com/photos/wall-clock-picture-id1308372943?b=1&k=20&m=1308372943&s=170667a&w=0&h=TjckQA_kaWUzDiQ157WgzNJ_231kkqzSHFbmJLNyGw0=', thumb: 'IMAGE_THUMBNAIL_URL' }),
      
      // ... more items
    ];
  }
}
