import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { IBook } from './book';
//import { ErrorHandlerComponent } from '../shared/error-handler/error-handler.component';
import { ILanguage } from '../languages/language';
import { PageRequest } from '../shared/page';

export interface BookQuery {
  search: string,
  registration: Date
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'http://localhost:5000/api/v1/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    console.log('Hello world');
    return this.http.get<IBook[]>(this.bookUrl);
  }

  getBook(id: number): Observable<IBook | undefined> {
    return this.getBooks().pipe(
      map((books: IBook[]) => books.find(book => book.book_id === id))     
    );
  }

  /*
  page(request: PageRequest<IBook>, query: BookQuery): Observable<Page<IBook>> {

  }
  */
}
