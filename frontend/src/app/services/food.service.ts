import { Injectable } from '@angular/core';
import { sample_foods } from '../../data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }   
  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:String):Food[]{

    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }


}
