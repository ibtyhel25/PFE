import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesLogComponent } from './les-log.component';

describe('LesLogComponent', () => {
  let component: LesLogComponent;
  let fixture: ComponentFixture<LesLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
