import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultLComponent } from './mult-l.component';

describe('MultLComponent', () => {
  let component: MultLComponent;
  let fixture: ComponentFixture<MultLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
