import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookListComponent } from "./books/book-list/book-list.component";
import { LanguageListComponent } from './languages/language-list/language-list.component';
import { SharedModule } from './shared/shared.module';

@Component({
    selector: 'bs-root',
    // standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // imports: [RouterModule]
})
export class AppComponent {
  title = 'bookstore-app';
}
