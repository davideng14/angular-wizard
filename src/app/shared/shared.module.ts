import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WizardComponentComponent } from './wizard-component/wizard-component.component';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardConfirmationComponent } from './wizard-confirmation/wizard-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    WizardComponentComponent,
    WizardHeaderComponent,
    WizardStepComponent,
    WizardConfirmationComponent
  ],
  exports: [
    WizardComponentComponent,
    WizardStepComponent,
    WizardHeaderComponent,
    WizardConfirmationComponent
  ]
})
export class SharedModule { }
