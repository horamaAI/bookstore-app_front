import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    // MatTableModule,
    MatPaginatorModule,
    // FormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // MatFormFieldModule,
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    // MatPaginatorModule,
    MatPaginator,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    // FormControl,
    CommonModule
  ]
})
export class SharedModule { }
