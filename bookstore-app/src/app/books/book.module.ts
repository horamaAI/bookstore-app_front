import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageSelectionComponent } from './language-selection.component';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    BookListComponent,
    LanguageSelectionComponent,
    BookDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'books', component: BookListComponent},
      {
        path: 'books/:id',
        component: BookDetailsComponent
        // canActivate
      }
    ]),
    SharedModule
  ],
  exports: [
    BookListComponent,
    LanguageSelectionComponent,
    BookDetailsComponent
  ]
})
export class BookModule { }
