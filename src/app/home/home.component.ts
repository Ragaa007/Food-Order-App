import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
      red : any = '#f00';
      black : any = '#000';
      foods:Foods[]=[];
      constructor(private fs:FoodService){

      }

      ngOnInit():void{
        this.foods = this.fs.getAllFood();
      }

      onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
        alert(`Old Value:${$event.oldValue}, 
          New Value: ${$event.newValue}, 
          Checked Color: ${$event.starRating.checkedcolor}, 
          Unchecked Color: ${$event.starRating.uncheckedcolor}`);
      }
 } 
