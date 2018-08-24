import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsevenComponent } from './Topseven.component';

describe('TopsevenComponent', () => {
  let component: TopsevenComponent;
  let fixture: ComponentFixture<TopsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
