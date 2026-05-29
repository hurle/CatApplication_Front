import { Component, inject, OnInit } from '@angular/core';
import { CatService } from '../../core/services/cat.service';
import { Breed } from '../../core/models/cat.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cat-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cat-search.html',
  styleUrl: './cat-search.css',
  standalone: true,
})

export class CatSearch implements OnInit {
  private catService = inject(CatService); // Inject services 
  private formBuilder = inject(FormBuilder); // Inject FormBuilder

  searchCatForm!: FormGroup ; // Form group for cat search
  isloading = false; // Loading state for API calls (!!NO USED NOW!!)
  breeds$!: Observable<Breed[]>; // Observable for cach cat breeds endpoint response

  ngOnInit() : void {
    this.initForm(); // Initialize the search form
    this.breeds$ = this.catService.getBreeds(); // Get cat breeds 
  }

  private initForm(): void {
    this.searchCatForm = this.formBuilder.group({ // Form validations
      breedId: ['', Validators.required],
    });
  }
}