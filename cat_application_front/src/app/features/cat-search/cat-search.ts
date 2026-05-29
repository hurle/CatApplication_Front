import { Component, inject, OnInit } from '@angular/core';
import { CatService } from '../../core/services/cat.service';
import { Breed, CatImage } from '../../core/models/cat.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { CatGrid } from '../../shared/components/cat-grid/cat-grid';


@Component({
  selector: 'app-cat-search',
  imports: [CommonModule, ReactiveFormsModule, CatGrid],
  templateUrl: './cat-search.html',
  styleUrl: './cat-search.css',
  standalone: true,
})

export class CatSearch implements OnInit {
  private catService = inject(CatService); // Inject cat service
  private formBuilder = inject(FormBuilder); // Inject FormBuilder
  
  private searchTrigger$ = new BehaviorSubject<{ // Trigger forcat search
    breedId: string;
    limit: number;
  } | null >(null); 

  searchCatForm!: FormGroup ; // Form group for cat search
  breeds$!: Observable<Breed[]>; // Observable for cach cat breeds endpoint response
  catImages$!: Observable<CatImage[]> // Observable for cach cat images endpoint response

  isloading = false; // Loading state for API calls (!!NO USED NOW!!)
  isEmpty = true; // State to check if the search result is empty

  ngOnInit() : void {
    this.initForm(); // Initialize the search form
    this.breeds$ = this.catService.getBreeds(); // Get cat breeds 

    // Search flow with trigger
    this.catImages$ = this.searchTrigger$.pipe(
      switchMap(searchParams => {
        if (!searchParams) return ([]);
        
        this.isloading = true;
        
        return this.catService.getCatsByFilters(searchParams.breedId, searchParams.limit).pipe(
          tap(() => this.isloading = false)
        );
      })
    );
  }

  private initForm(): void {
    this.searchCatForm = this.formBuilder.group({ // Form validations
      breedId: ['', Validators.required],
      limit: [5, [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  // handle search form
  onSearch(): void {
    if (this.searchCatForm.invalid  ) {
      return; // If form is invalid, do not proceed
    }

    this.isloading = true; // Set loading state to true
    this.isEmpty = true; // Reset empty state

    const breedId = this.searchCatForm.get('breedId')?.value; // Get selected breed ID from form
    const limit = this.searchCatForm.get('limit')?.value; // Get selected limit from form

    this.searchTrigger$.next({ breedId, limit }); // Trigger search 
  }

  CleanSearch(): void {
    this.searchCatForm.reset(); // Reset the search form
    this.isEmpty = true; // Reset empty state
    this.searchTrigger$.next(null); // Clear search results
  }
}