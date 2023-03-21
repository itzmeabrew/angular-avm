import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudCardComponent } from './aud-card.component';

describe('AudCardComponent', () => {
  let component: AudCardComponent;
  let fixture: ComponentFixture<AudCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
