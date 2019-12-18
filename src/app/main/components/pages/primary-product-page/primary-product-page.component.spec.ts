import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryProductPageComponent } from './primary-product-page.component';

describe('PrimaryProductPageComponent', () => {
  let component: PrimaryProductPageComponent;
  let fixture: ComponentFixture<PrimaryProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
