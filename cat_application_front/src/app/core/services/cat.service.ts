import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Breed } from '../models/cat.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private http = inject(HttpClient); 
  private apiUrl = environment.apiCatUrl;

  // Get all cat breeds
  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`);
  }

  
}
