import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule  } from '@angular/common';
import { StarRatingWrapperModule } from '../../../star-rating-wrapper/star-rating-wrapper.module'; // Import your wrapper module


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarRatingWrapperModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  foods:Food[] = [];
  constructor(private foodService:FoodService ){
    this.foods = foodService.getAll();
  }
  
  
}

