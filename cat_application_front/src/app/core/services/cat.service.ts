import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Breed, CatImage } from '../models/cat.model';
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

  // Get cat with filters
  getCatsByFilters(BreedId: string, limit: number): Observable<CatImage[]> {
    const params = new URLSearchParams(); // Create search params
    params.append('include_breeds', BreedId); // Append breedId from param
    params.append('limit', limit.toString()); // Append limit from param
    return this.http.get<CatImage[]>(`${this.apiUrl}/images/search?page=0&${params.toString()}`); 
    
  }
}
