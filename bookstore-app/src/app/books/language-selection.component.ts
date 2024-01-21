import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ILanguage } from '../languages/language';
import { LanguageService } from '../languages/language.service';
import { Subscription } from 'rxjs';
import { FormArray, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookLanguageTransactionsService } from './book-language-transactions.service';

@Component({
  selector: 'bs-language-selection',
  // standalone: true,
  // imports: [],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.css',
})
export class LanguageSelectionComponent implements OnInit, OnDestroy {
  languagesSelected: number[] = [];
  languages: ILanguage[] = [];
  // @Output() selectionChanged = new EventEmitter<ILanguage[]>();
  sub!: Subscription;
  // subForm!: Subscription;

  constructor(
    private languageService: LanguageService,
    private bookTransactionService: BookLanguageTransactionsService
  ) {}

  ngOnInit(): void {
    this.sub = this.languageService.getLanguages().subscribe({
      next: (languages) => {
        this.languages = languages;
        console.log('types of: languages: ', typeof this.languages);
        console.log('types of: languages in input: ', typeof languages);
        // console.log(
        //   'types of: languagesSelected: ',
        //   typeof this.languagesSelected
        // );
      },
    });

    // console.log('check 123 test: ');

    // this.subForm = this.languagesSelected.valueChanges.subscribe((data) => {
    //   console.log('check 123: ', data);
    // });

    console.log('end check 123 test: ');
    this.bookTransactionService.setSelectedLanguages(this.languagesSelected);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // onSelectionChange() {
  //   this.bookTransactionService.setSelectedLanguages(this.languagesSelected);
  // }

  totoFunc(eventually: any) {
    console.log('hello world: ', eventually);
    this.bookTransactionService.setSelectedLanguages(this.languagesSelected);
  }
}
