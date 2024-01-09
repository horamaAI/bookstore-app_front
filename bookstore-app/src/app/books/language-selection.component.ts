import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ILanguage } from '../languages/language';
import { LanguageService } from '../languages/language.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'bs-language-selection',
  // standalone: true,
  // imports: [],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.css'
})
export class LanguageSelectionComponent implements OnInit, OnDestroy {
  languagesSelected = new FormControl('');
  languages: ILanguage[] = [];
  @Output() selectionChanged = new EventEmitter<ILanguage[]>();
  sub!: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.sub = this.languageService.getLanguages().subscribe({
      next: (languages$) => {
        this.languages = languages$;
        console.log("Here is the content", this.languages);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
