import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILanguage } from '../language';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector: 'bs-language-list',
  standalone: true,
  imports: [],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent implements OnInit, OnDestroy {

  errorMessage = '';
  languages: ILanguage[] = [];
  sub!: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
      this.sub = this.languageService.getLanguages().subscribe({
        next: languages => {
          this.languages = languages;
          console.log('xoxo whhhatt languages:', JSON.stringify(this.languages));
          let res = this.languages.filter(
            bookLanguage =>
                bookLanguage.language_code === 'zho'
          );
          console.log('xoxo Testing languages:', JSON.stringify(res));
            },
        error: err => this.errorMessage = err
      });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
