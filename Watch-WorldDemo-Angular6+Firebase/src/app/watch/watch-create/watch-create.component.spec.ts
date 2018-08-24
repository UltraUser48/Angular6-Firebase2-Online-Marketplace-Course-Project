import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCreateComponent } from './watch-create.component';

describe('WatchCreateComponent', () => {
  let component: WatchCreateComponent;
  let fixture: ComponentFixture<WatchCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
