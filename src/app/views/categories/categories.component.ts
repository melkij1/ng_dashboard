import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  counterTasks: [];

  selectedCategory: Category;
  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.categorySubject.subscribe(category => this.categories = category)
    this.countTask()
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category)
  }

  countTask(){
    const arr = []
    // console.log(this.dataHandler.tasksSubject)

    console.log(arr,'arr')
  }
}
