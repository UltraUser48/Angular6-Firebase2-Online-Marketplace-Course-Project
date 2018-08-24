import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchStartComponent } from './watch-start.component';

describe('WatchStartComponent', () => {
  let component: WatchStartComponent;
  let fixture: ComponentFixture<WatchStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
