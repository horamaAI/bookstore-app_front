import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'bs-paginator',
  // standalone: true,
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() totalItems = 0;
  @Input() pageSize = 0;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // dataSource: MatTableModule

  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event);
  }
}
