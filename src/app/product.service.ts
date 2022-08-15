import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './Products';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.apiURL}`).pipe(
      map((res) => res),
      catchError((err) => of('error', err))
    );
  }
}
