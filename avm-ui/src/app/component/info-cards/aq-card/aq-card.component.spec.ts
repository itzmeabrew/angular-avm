import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqCardComponent } from './aq-card.component';

describe('AqCardComponent', () => {
  let component: AqCardComponent;
  let fixture: ComponentFixture<AqCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AqCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
