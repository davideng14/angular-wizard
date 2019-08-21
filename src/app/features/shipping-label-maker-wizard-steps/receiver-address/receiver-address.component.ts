import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WizardDataService } from 'src/app/shared/services/wizard-data.service';

@Component({
  selector: 'app-receiver-address',
  templateUrl: './receiver-address.component.html',
  styleUrls: ['./receiver-address.component.scss']
})
export class ReceiverAddressComponent implements OnInit, WizardData {

  receiverForm = new FormGroup({
    name: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  });
  context: object;

  constructor(private wizardService: WizardDataService) {}

  ngOnInit() {
  }

  onAction(action: string): void {
    this.wizardService.setWizardData({
      key: 'to',
      data: this.receiverForm.value
    });
  }

}
