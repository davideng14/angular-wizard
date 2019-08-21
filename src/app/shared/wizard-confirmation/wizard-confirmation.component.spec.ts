import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardConfirmationComponent } from './wizard-confirmation.component';

describe('WizardConfirmationComponent', () => {
  let component: WizardConfirmationComponent;
  let fixture: ComponentFixture<WizardConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
