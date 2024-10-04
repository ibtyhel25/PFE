import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatConsomationComponent } from './etat-consomation.component';

describe('EtatConsomationComponent', () => {
  let component: EtatConsomationComponent;
  let fixture: ComponentFixture<EtatConsomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatConsomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatConsomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
