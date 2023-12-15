import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent {
  @Input() categories: any[] = [];

  toggleCategorySelection(category: any): void {
    category.selected = !category.selected;
  }

  getSelectedCategoryNames(): string[] {
    return this.categories.filter(category => category.selected).map(category => category.name);
  }

  
}
