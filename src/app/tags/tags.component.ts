import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: Tag[] = [];
  constructor(private fs:FoodService){
  }
  ngOnInit():void{
    this.tags = this.fs.getAllTag(); 
    console.log("hello", this.tags); 
  }
}
