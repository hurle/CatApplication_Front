import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGrid } from './cat-grid';

describe('CatGrid', () => {
  let component: CatGrid;
  let fixture: ComponentFixture<CatGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(CatGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
