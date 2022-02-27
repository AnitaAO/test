import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryModule } from 'ng-gallery';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BackgroundComponent } from './background/background.component';
import { CarouselModule } from './carousel/carousel.module';
import { SwiperComponent } from './swiper/swiper.component';
import { NotvideoOwlComponent } from './notvideo-owl/notvideo-owl.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [				
    AppComponent,
  
      BackgroundComponent,
      SwiperComponent,
      NotvideoOwlComponent
   ],
  imports: [
    BrowserAnimationsModule,
    GalleryModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
