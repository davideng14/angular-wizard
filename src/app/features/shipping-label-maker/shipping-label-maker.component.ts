import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.scss']
})
export class ShippingLabelMakerComponent implements OnInit {

  wizardContext: object;
  title = 'Shipping Label Component';

  constructor() { }

  ngOnInit() {
    this.wizardContext = {
      title: 'Shipping Label Component'
    };
  }

}
