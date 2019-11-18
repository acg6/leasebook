import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly URL_API = 'http://127.0.0.1:3000/leasebook-api/books';

  constructor( private http: HttpClient ) {}

  public register(book: Book) {
    return this.http.post(`${this.URL_API}/register`, book);
  }
}