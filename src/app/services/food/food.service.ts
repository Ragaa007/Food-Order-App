import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood(): Foods[] {
    return [ 
        {
          id: 1,
          name: 'Pizza Pepperoni',
          cookTime: '10-20',
          price: 10,
          favourite: false,
          origins: ['italy'],
          stars: 4.5,
          imageUrl: '/assets/food1.jpg',
          tags: ['FastFood','Pizza','Lunch']
        },
        {
          id: 2,
          name: 'Meatball',
          cookTime: '20-25',
          price: 20,
          favourite: true,
          origins: ['Persia', 'China', 'Middle East'],
          stars: 4.7,
          imageUrl: '/assets/food2.jpg',
          tags: ['SlowtFood','Lunch']
        },
        {
          id: 3,
          name: 'Hamburger',
          cookTime: '10-15',
          price: 5,
          favourite: false,
          origins: ['US', 'Germany'],
          stars: 3.5,
          imageUrl: '/assets/food3.jpg',
          tags: ['FastFood','Hamburger']
        },
        {
          id: 4,
          name: 'Fried Potatoes',
          cookTime: '15-20',
          price: 2,
          favourite: true,
          origins: ['Belgium', 'France'],
          stars: 4,
          imageUrl: '/assets/food4.jpg',
          tags: ['FastFood','Fry']
        },
        {
          id: 5,
          name: 'Chicken Soup',
          cookTime: '30-40',
          price: 11,
          favourite: false,
          origins: ['India', 'Asia'],
          stars: 4.5,
          imageUrl: '/assets/food5.jpg',
          tags: ['SlowFood','Soup','Lunch']
        },
        {
          id: 6,
          name: 'Vegetable Pizza',
          cookTime: '40-50',
          price: 8,
          favourite: true,
          origins: ['italy'],
          stars: 4.2,
          imageUrl: '/assets/food6.jpg',
          tags: ['FastFood','Pizza','Lunch']
        },
        {
          id: 7,
          name: 'Pizza Spicy Pepperoni',
          cookTime: '20-30',
          price: 10,
          favourite: false,
          origins: ['india'],
          stars: 4.5,
          imageUrl: '/assets/food7.jpg',
          tags: ['FastFood','Pizza','Lunch']
        },
        {
          id: 8,
          name: 'Burger',
          cookTime: '15-20',
          price: 12,
          favourite: false,
          origins: ['Italy', 'UK'],
          stars: 3.7,
          imageUrl: '/assets/food8.jpg',
          tags: ['FastFood','Burger']
        }
    ];
  }

  getAllFoodTag(tag:string): Foods[]{

    //return tag=='All' ? this.getAllFood() : this.getAllFood().filter(food => food.tags?.includes(tag));

    if(tag=='All'){
      return this.getAllFood();
    } else{
      return this.getAllFood().filter(food => food.tags?.includes(tag));
    }
  }

  getAllTag():Tag[]{
    return [
      { name: 'All'},
      { name: 'FastFood'},
      { name: 'Pizza'},
      { name: 'Lunch'},
      { name: 'SlowFood'},
      { name: 'Hamburger'},
      { name: 'Fry'},
      { name: 'Soup'}
    ];
  }

}
