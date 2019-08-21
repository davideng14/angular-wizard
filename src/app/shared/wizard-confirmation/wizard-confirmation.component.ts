import { Component, OnInit, OnDestroy } from '@angular/core';
import { WizardAction } from 'src/app/models/Wizard/WizardOption';
import { WizardDataService } from '../services/wizard-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard-confirmation',
  templateUrl: './wizard-confirmation.component.html',
  styleUrls: ['./wizard-confirmation.component.scss']
})
export class WizardConfirmationComponent implements OnInit, WizardData, OnDestroy {

  context: object;
  result: string;
  private subscription: Subscription;

  constructor(private wizardService: WizardDataService) { }

  ngOnInit() {
    this.subscription = this.wizardService.resultNotifier$
      .subscribe((result) => {
        this.result = JSON.stringify(result);
      });
  }

  onAction(action: string): void {
    if (action === WizardAction.End) {
      console.log('Wizard Ended');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
