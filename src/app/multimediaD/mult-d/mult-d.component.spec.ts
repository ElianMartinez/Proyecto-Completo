import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultDComponent } from './mult-d.component';

describe('MultDComponent', () => {
  let component: MultDComponent;
  let fixture: ComponentFixture<MultDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
