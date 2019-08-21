import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardDataService {

  wizardData: object = {};
  private _resultNotifier$ = new Subject();
  resultNotifier$ = this._resultNotifier$.asObservable();

  constructor() { }

  setWizardData(data: { key: string, data: object | string }): void {
    this.wizardData[data.key] = data.data;
    this._resultNotifier$.next(this.wizardData);
  }

  getWizarData(): object {
    return this.wizardData;
  }

}
