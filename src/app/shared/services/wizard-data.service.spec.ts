import { TestBed, inject } from '@angular/core/testing';

import { WizardDataService } from './wizard-data.service';

describe('WizardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WizardDataService]
    });
  });

  it('should be created', inject([WizardDataService], (service: WizardDataService) => {
    expect(service).toBeTruthy();
  }));
});
