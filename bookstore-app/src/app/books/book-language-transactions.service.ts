import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { ILanguage } from '../languages/language';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BookLanguageTransactionsService {
  private languages$ = new BehaviorSubject<number[]>([]);
  selectedLanguages$ = this.languages$.asObservable();
  // languagesSelected = new FormControl<ILanguage[]>([]);

  constructor() {}

  setSelectedLanguages(languages: number[]) {
    console.log('value set');
    this.languages$.next(languages);
    // this.languagesSelected = languages;
    // this.languages$.next(languages.valueChanges);
    // this.languages$.next(languages);
    // languages.valueChanges
    //   .pipe(
    //     tap((data) => {
    //       console.log('check 1 2: ', JSON.stringify(data));
    //     })
    //   )
    //   .subscribe((languageExpected) =>
    //     // this.selectedLanguages$.next(languageExpected)
    //     this.totoFunc()
    //   );
  }

  totoFunc() {
    console.log('hello world');
  }

  getSelectedLanguages(): Observable<number[]> {
    // return new Observable<ILanguage[]>();
    console.log('value get');
    return this.selectedLanguages$;
  }
}
