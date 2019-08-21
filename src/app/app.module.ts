import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker.component';
import { ShippingLabelComponent } from './features/shipping-label/shipping-label.component';
import { SharedModule } from './shared/shared.module';
import { ReceiverAddressComponent } from './features/shipping-label-maker-wizard-steps/receiver-address/receiver-address.component';
import { SenderAddressComponent } from './features/shipping-label-maker-wizard-steps/sender-address/sender-address.component';
import { WeightComponent } from './features/shipping-label-maker-wizard-steps/weight/weight.component';
import { ShippingOptionComponent } from './features/shipping-label-maker-wizard-steps/shipping-option/shipping-option.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingLabelMakerComponent,
    ShippingLabelComponent,
    ReceiverAddressComponent,
    SenderAddressComponent,
    WeightComponent,
    ShippingOptionComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
