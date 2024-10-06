import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStarRatingModule } from 'ngx-star-rating'; // Import the NgxStarRatingModule



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxStarRatingModule
  ],
  exports: [
    NgxStarRatingModule
  ] 
})
export class StarRatingWrapperModule { }
