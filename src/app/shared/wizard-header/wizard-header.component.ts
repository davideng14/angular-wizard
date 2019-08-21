import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss']
})
export class WizardHeaderComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() stepInfo: StepInformation;
  currentStep: number;
  totalSteps: number;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  detectChanges(): void {
    this.cdRef.detectChanges();
  }

}
