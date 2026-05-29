import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSearch } from './cat-search';

describe('CatSearch', () => {
  let component: CatSearch;
  let fixture: ComponentFixture<CatSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(CatSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
