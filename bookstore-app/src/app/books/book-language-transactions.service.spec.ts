import { TestBed } from '@angular/core/testing';

import { BookLanguageTransactionsService } from './book-language-transactions.service';

describe('BookLanguageTransactionsService', () => {
  let service: BookLanguageTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLanguageTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
