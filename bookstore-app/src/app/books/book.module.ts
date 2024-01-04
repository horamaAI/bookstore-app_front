import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PaginatorComponent } from '../shared/paginator.component';



@NgModule({
  declarations: [
    BookListComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [BookListComponent]
})
export class BookModule { }
