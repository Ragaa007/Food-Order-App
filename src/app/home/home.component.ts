import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
      red : any = '#f00';
      black : any = '#000';
      foods:Foods[]=[];
      tags: Tag[] = [];
      constructor(private fs:FoodService, private route:ActivatedRoute){

      }

      ngOnInit():void{

        this.route.params.subscribe(params=>{
          if(params['searchItem']){
            this.foods = this.fs.getAllFood().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()))
            //this.foods = this.fs.getAllFood().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()))
          }
          else if(params['tag']){
            this.foods= this.fs.getAllFoodTag(params['tag']);
          }
          else {
            this.foods = this.fs.getAllFood();
          }
        })

        //this.tags = this.fs.getAllTag();
       // console.log("hello", this.tags)
        
      }

      onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
        alert(`Old Value:${$event.oldValue}, 
          New Value: ${$event.newValue}, 
          Checked Color: ${$event.starRating.checkedcolor}, 
          Unchecked Color: ${$event.starRating.uncheckedcolor}`);
      }
 } 
