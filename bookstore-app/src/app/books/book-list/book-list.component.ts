import { Component, Input, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../book';
import { NgIf, NgFor } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'bs-book-list',
  // standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, OnDestroy {

  errorMessage = '';
  books: IBook[] = [];
  // listFilter = signal('');
  // filteredBooks = computed(() => this.filterByLanguage(this.listFilter()));
  filteredBooks: IBook[] = [];
  sub!: Subscription;
  displayedColumns: string[] = ['Book id', 'Title', 'ISBN', 'Number of pages', 'Publication date', 'Publisher', 'Language'];
  dataSource = new MatTableDataSource<IBook>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.sub = this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books;
        this.filteredBooks = this.books;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.sub.unsubscribe();
  }

  filterByLanguage(langId: number) : IBook[] {
    var res = this.books.filter((book) => {
       return book.language.language_id === langId
    });
    console.log('Testing languages:', JSON.stringify(res))
    return res;
  }
}