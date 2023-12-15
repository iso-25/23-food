import { Component, ViewChild } from '@angular/core';
// import { HomeRestaurantsComponent } from './components/home-restaurants/home-restaurants.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ViewChild(HomeRestaurantsComponent)
  // homeRestaurants!: HomeRestaurantsComponent;
  
  allCategories = [
    {
      name: 'pizza',
      title: 'Pizza',
      img: 'assets/categories/pizza.png'
    },
    {
      name: 'burger',
      title: 'Burger',
      img: 'assets/categories/burger.png'
    },
    {
      name: 'bbq',
      title: 'BBQ',
      img: 'assets/categories/meat.png'
    },
    {
      name: 'sushi',
      title: 'Sushi',
      img: 'assets/categories/sushi.png'
    },
    {
      name: 'vegan',
      title: 'Vegan',
      img: 'assets/categories/broccoli.png'
    },
    {
      name: 'desserts',
      title: 'Desserts',
      img: 'assets/categories/cake.png'
    },
  ];

  allRestaurants = [
    {
      img: 'assets/restaurants/rest-01.png',
      featured: true,
      title: 'Royal Sushi House',
      time: '30-40 min',
      price: [
        {
          currency: '$',
          value: 32,
          span: ' min sum'
        }
      ],
      category: [
        {
          name: 'sushi'
        }
      ],
      cart: 0,
    },
    {
      img: 'assets/restaurants/rest-02.png',
      featured: true,
      title: 'Burgers & Pizza',
      time: '40-60 min',
      price: [
        {
          currency: '$',
          value: 24,
          span: ' min sum'
        }
      ],
      category: [
        {
          name: 'burger',
        },
        {
          name: 'pizza'
        }
      ],
      cart: 2,
    },
    {
      img: 'assets/restaurants/rest-03.png',
      featured: false,
      title: 'Ninja sushi',
      time: '20-40 min',
      price: [
        {
          currency: '$',
          value: 40,
          span: ' min sum'
        }
      ],
      category: [
        {
          name: 'sushi'
        }
      ],
      cart: 0,
    },
    {
      img: 'assets/restaurants/rest-04.png',
      featured: false,
      title: 'Sushi master',
      time: '60-70 min',
      price: [
        {
          currency: '$',
          value: 49,
          span: ' min sum'
        }
      ],
      category: [
        {
          name: 'sushi'
        }
      ],
      cart: 0,
    },
    {
      img: 'assets/restaurants/rest-05.png',
      featured: false,
      title: 'Japanese sushi',
      time: '30-50 min',
      price: [
        {
          currency: '$',
          value: 104,
          span: ' min sum'
        }
      ],
      category: [
        {
          name: 'sushi'
        }
      ],
      cart: 0,
    },
    {
      img: 'assets/restaurants/rest-06.png',
      featured: false,
      title: 'Kobe',
      time: '20-30 min',
      price: [
        {
          currency: '$',
          value: 57,
          span: ' min sum'
        }
      ],
      category: [
        {
          name: 'sushi',
        }
      ],
      cart: 0,
    },
  ];

  selectedCategoryNames: string[] = [];

  updateSelectedCategories(event: any): void {
    this.selectedCategoryNames = event;
  }

  // updateSelectedCategories(event: any): void {
  //   // Оновлення selectedCategories в компоненті home.component.ts
  //   this.selectedCategoryNames = event;
    
  //   // Виклик фільтрації ресторанів у компоненті home-restaurants
  //   this.homeRestaurants.filterRestaurants(this.selectedCategoryNames);
  // }
}
