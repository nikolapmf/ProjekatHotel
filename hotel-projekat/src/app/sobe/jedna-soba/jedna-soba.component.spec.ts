import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednaSobaComponent } from './jedna-soba.component';

describe('JednaSobaComponent', () => {
  let component: JednaSobaComponent;
  let fixture: ComponentFixture<JednaSobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JednaSobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JednaSobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
