import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryModule } from 'ng-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BackgroundComponent } from './background/background.component';
import { CarouselModule } from './carousel/carousel.module';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  declarations: [				
    AppComponent,
  
    BackgroundComponent,
    HomeGalleryComponent,
    HeaderComponent,
    FooterComponent      
   ],

  imports: [
    BrowserAnimationsModule,
    GalleryModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    DefaultModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
