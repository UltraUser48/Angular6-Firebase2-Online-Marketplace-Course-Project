import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchEditComponent } from './watch-edit.component';

describe('WatchEditComponent', () => {
  let component: WatchEditComponent;
  let fixture: ComponentFixture<WatchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
