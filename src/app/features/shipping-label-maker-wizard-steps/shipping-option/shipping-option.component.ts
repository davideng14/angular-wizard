import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WizardDataService } from 'src/app/shared/services/wizard-data.service';


@Component({
  selector: 'app-shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.scss']
})
export class ShippingOptionComponent implements OnInit, WizardData {

  shippingOptionForm = new FormGroup({
    shippingOption: new FormControl('')
  });
  context: object;

  constructor(private wizardService: WizardDataService) { }

  ngOnInit() {
  }

  onAction(action: string): void {
    this.wizardService.setWizardData({
      key: 'shippingOption',
      data: this.shippingOptionForm.value.shippingOption
    });
  }

}
