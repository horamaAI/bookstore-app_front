import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  forkJoin,
  of,
  take,
} from 'rxjs';
import { BookService } from '../book.service';
import { IBook } from '../book';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ILanguage } from '../../languages/language';
import { LanguageService } from '../../languages/language.service';
import { BookLanguageTransactionsService } from '../book-language-transactions.service';

@Component({
  selector: 'bs-book-list',
  // standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit, OnDestroy, AfterViewInit {
  errorMessage = '';
  books: IBook[] = [];
  // listFilter = signal('');
  // filteredBooks = computed(() => this.filterByLanguage(this.listFilter()));
  filteredBooks: IBook[] = [];
  languages: ILanguage[] = [];
  sub!: Subscription;
  subLang!: Subscription;
  displayedColumns: string[] = [
    'Book id',
    'Title',
    'ISBN',
    'Number of pages',
    'Publication date',
    'Publisher',
    'Language',
  ];
  dataSource = new MatTableDataSource<IBook>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private bookService: BookService,
    private languageTransactionService: BookLanguageTransactionsService
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    // this.sub = this.bookService.getBooks().pipe(
    //   take(30)

    this.sub = this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.filteredBooks = this.books;
        this.dataSource.data = books;
        // this.dataSource.paginator = this.paginator;
      },

      error: (err) => (this.errorMessage = err),
    });

    this.subLang = this.languageTransactionService
      .getSelectedLanguages()
      .subscribe({
        next: (languages$) => {
          this.languages = languages$;
          // this.filteredBooks = this.books;
          // this.dataSource = new MatTableDataSource(books);
          // this.dataSource.paginator = this.paginator;
          console.log('check selected values: ', this.languages);
        },
        error: (err) => (this.errorMessage = err),
      });
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.sub.unsubscribe();
    this.subLang.unsubscribe();
  }

  filterByLanguage(langId: number): IBook[] {
    var res = this.books.filter((book) => book.language.language_id === langId);
    console.log('Testing languages:', JSON.stringify(res));
    return res;
  }
}
