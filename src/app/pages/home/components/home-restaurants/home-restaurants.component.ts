import { Component, Input } from '@angular/core';

export class Category {
  name: string;
  title: string;
  img: string;
  
  constructor(name: string, title: string, img: string) {
    this.name = name;
    this.title = title;
    this.img = img;
  }
}

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './home-restaurants.component.html',
  styleUrls: ['./home-restaurants.component.scss']
})
export class HomeRestaurantsComponent {
  @Input() restaurants: any[] = [];
  @Input() categories: any[] = [];

  getCategory(catName: string): Category | undefined {
    return this.categories.find((cat) => cat.name === catName);
  }
  
  getCategoryArray(catName: string): Category[] {
    const category = this.getCategory(catName);
    return category ? [category] : [];
  }

  // filteredRestaurants: any[] = [];

  // filterRestaurants(selectedCategoryNames: string[]): void {
  //   this.filteredRestaurants = this.restaurants.filter(restaurant =>
  //     restaurant.category.some((cat: any) => selectedCategoryNames.includes(cat.name))
  //   );
  // }
}
