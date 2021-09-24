import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZalbaComponent } from './add-zalba.component';

describe('AddZalbaComponent', () => {
  let component: AddZalbaComponent;
  let fixture: ComponentFixture<AddZalbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZalbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZalbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
