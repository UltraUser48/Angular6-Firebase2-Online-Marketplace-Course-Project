import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsHistoryComponent } from './brands-history.component';

describe('BrandsHistoryComponent', () => {
  let component: BrandsHistoryComponent;
  let fixture: ComponentFixture<BrandsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
