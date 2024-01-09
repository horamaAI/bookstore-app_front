import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'bs-book-details',
  // standalone: true,
  // imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  pageTitle = 'Book detail';
  errorMessage = '';
  book: IBook | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("redirect to id:", id)
    if (id) {
      this.getBook(id);
    }
  }

  getBook(id: number): void {
    this.bookService.getBook(id).subscribe({
      next: book => {
        console.log("fetch content: ", book);
        this.book = book;
      },
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }
}
