import { Component, OnInit, Input, Output, EventEmitter, ContentChild,
        ContentChildren, QueryList, AfterViewInit, ViewChild  } from '@angular/core';
import { WizardHeaderComponent } from '../wizard-header/wizard-header.component';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { WizardAction } from '../../models/Wizard/WizardOption';
import { WizardConfirmationComponent } from '../wizard-confirmation/wizard-confirmation.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard-component.component.html',
  styleUrls: ['./wizard-component.component.scss']
})
export class WizardComponentComponent implements OnInit, AfterViewInit {

  title: string;
  index = 0;
  totalSteps: number;
  nextLabel = 'Next';

  @ContentChild(WizardHeaderComponent) header: WizardHeaderComponent;
  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;

  @Input() wizardContext;
  @Output() complete: EventEmitter<object>;

  constructor() { }

  ngOnInit() {
    this.title = this.wizardContext.title;
  }

  ngAfterViewInit(): void {
    this.header.currentStep = 1;
    this.header.totalSteps = this.steps.toArray().length;
    this.totalSteps = this.steps.toArray().length;
    this.header.detectChanges();
  }

  getCurrentStep(): WizardStepComponent {
    let currentStep: WizardStepComponent;
    this.steps.forEach((item, i) => {
      if ( i === this.index ) {
        currentStep = item;
        return;
      }
    });

    if (this.index === this.totalSteps - 1) {
      this.nextLabel = 'End';
    }

    return currentStep;
  }

  next(): void {
    if (this.index + 1 === this.totalSteps) {
      this.getCurrentStep().onAction(WizardAction.End);
      return;
    }
    this.getCurrentStep().onAction(WizardAction.Next);
    this.index++;
    this.header.currentStep = this.index + 1;
  }

  prev(): void {
    if (this.index === 0) {
      return;
    }
    this.getCurrentStep().onAction(WizardAction.Prev);
    this.index--;
    this.header.currentStep = this.index + 1;
  }

}
