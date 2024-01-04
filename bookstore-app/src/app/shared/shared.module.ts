import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule, MatPaginatorModule, MatTableModule
  ],
  exports: [MatPaginatorModule, MatTableModule, FormsModule, PaginatorComponent]
})
export class SharedModule { }
