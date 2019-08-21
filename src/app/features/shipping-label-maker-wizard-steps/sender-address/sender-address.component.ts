import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WizardDataService } from 'src/app/shared/services/wizard-data.service';

@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.scss']
})
export class SenderAddressComponent implements WizardData {

  senderForm = new FormGroup({
    name: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  });
  context: object;

  constructor(private wizardService: WizardDataService) { }

  onAction(action: string): void {
    this.wizardService.setWizardData({
      key: 'from',
      data: this.senderForm.value
    });
  }

}
