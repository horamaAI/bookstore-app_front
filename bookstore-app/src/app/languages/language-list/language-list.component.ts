import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ILanguage } from '../language';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'bs-language-list',
  // standalone: true,
  // imports: [],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent implements OnInit, OnDestroy, AfterViewInit {

  errorMessage = '';
  languages: ILanguage[] = [];
  sub!: Subscription;
  displayedColumns: string[] = ['language_id', 'language_code', 'language_name'];
  dataSource = new MatTableDataSource<ILanguage>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private languageService: LanguageService) {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
      this.sub = this.languageService.getLanguages().subscribe({
        next: languages => {
          this.dataSource.data = languages;
          this.languages = languages;
          // console.log('xoxo datasource languages:', JSON.stringify(this.dataSource.data));
          // console.log('xoxo whhhatt languages:', JSON.stringify(this.languages));
          // let res = this.languages.filter(
          //   bookLanguage =>
          //       bookLanguage.language_code === 'zho'
          // );
          // console.log('xoxo Testing languages:', JSON.stringify(res));
          // this.dataSource.paginator = this.paginator;
        },
        error: err => this.errorMessage = err
      });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
