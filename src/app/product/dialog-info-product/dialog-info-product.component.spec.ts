import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoProductComponent } from './dialog-info-product.component';

describe('DialogInfoProductComponent', () => {
  let component: DialogInfoProductComponent;
  let fixture: ComponentFixture<DialogInfoProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInfoProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
