import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { ILanguage } from '../languages/language';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BookLanguageTransactionsService {
  private languages$ = new BehaviorSubject<FormControl>({} as FormControl);
  selectedLanguages$ = this.languages$.asObservable();

  constructor() {}

  setSelectedLanguages(languages: FormControl) {
    this.languages$.next(languages);
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

  getSelectedLanguages(): Observable<ILanguage[]> {
    return new Observable<ILanguage[]>();
  }
}
