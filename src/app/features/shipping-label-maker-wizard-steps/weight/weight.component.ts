import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WizardDataService } from 'src/app/shared/services/wizard-data.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit, WizardData {

  weightForm = new FormGroup({
    weight: new FormControl('')
  });
  context: object;

  constructor(private wizardService: WizardDataService) { }

  ngOnInit() {
  }

  onAction(action: string) {
    this.wizardService.setWizardData({
      key: 'weight',
      data: this.weightForm.value.weight
    });
  }

}
