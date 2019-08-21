import { Component, OnInit, TemplateRef, ElementRef, Input, ViewChild, ContentChild } from '@angular/core';
import { WizardComponentComponent } from '../wizard-component/wizard-component.component';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit, WizardData {

  @Input() stepTemplate: TemplateRef<ElementRef>;
  parent: WizardComponentComponent;
  isTheLastStep: boolean;
  context: object;
  @ViewChild('currentStep') content;
  @ContentChild('specific') specificComp;

  constructor() {}

  ngOnInit() {
  }

  onAction(action: string): void {
    this.specificComp.onAction(action);
  }

}
