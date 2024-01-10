import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { ILanguage } from './language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private bookUrl = 'http://localhost:5000/api/v1/languages';

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<ILanguage[]> {
    // console.log('Hello world');
    return this.http.get<ILanguage[]>(this.bookUrl);
  }
}
