import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSobaComponent } from './create-soba.component';

describe('CreateSobaComponent', () => {
  let component: CreateSobaComponent;
  let fixture: ComponentFixture<CreateSobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
