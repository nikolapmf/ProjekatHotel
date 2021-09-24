import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobaListComponent } from './soba-list.component';

describe('SobaListComponent', () => {
  let component: SobaListComponent;
  let fixture: ComponentFixture<SobaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
