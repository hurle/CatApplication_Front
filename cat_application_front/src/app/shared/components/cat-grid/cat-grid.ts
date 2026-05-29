import { Component, Input, input } from '@angular/core';
import { CatImage } from '../../../core/models/cat.model';

@Component({
  selector: 'app-cat-grid',
  imports: [],
  templateUrl: './cat-grid.html',
  styleUrl: './cat-grid.css',
  standalone: true,
})
export class CatGrid {
  @Input() images: CatImage[] = [];
  @Input() isLoading: boolean = false;
  @Input() searched: boolean = false;
}
