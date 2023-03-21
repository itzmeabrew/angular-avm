import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpCardComponent } from './tmp-card.component';

describe('TmpCardComponent', () => {
  let component: TmpCardComponent;
  let fixture: ComponentFixture<TmpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
