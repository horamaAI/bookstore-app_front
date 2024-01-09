import { NgModule } from '@angular/core';
import { LanguageListComponent } from './language-list/language-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LanguageListComponent],
  imports: [
    SharedModule
  ],
  exports: [
    LanguageListComponent
  ]
})
export class LanguageModule { }
