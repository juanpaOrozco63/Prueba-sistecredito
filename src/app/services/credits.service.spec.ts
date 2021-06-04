
import { CreditsService } from './credits.service';
import { creditDomain } from '../domains/credit';

describe('CreditsService', () => {
  let service: CreditsService;
  beforeEach(() => {
    service = new CreditsService(null);
  });
/*
  it('Debe cargar la lista con los creditos', () => {
    service.getCreditsList();
    expect(service.getCreditsList.length).toBeGreaterThan(0);
  });

  it('Debe actualizar un credito', () => {
    let token = 'SDF42FN1F';
    let credit: creditDomain = new creditDomain(
      'Calle 4c #89-27',
      2,
      'pruebemail@gmail.com',
      '123',
      '1006107608',
      'Orozco',
      'Cali',
      'Melendez',
      'Juan',
      '3122524567',
      10000
    );
    service.updateCredit(token,credit);
    expect(service.createCredits).toContain(1);
  });

  it('Debe eliminar un credito', () => {
    let token = 'SDF42FN1F';
    service.deleteCredit(token);
    expect(service.deleteCredit).toContain(1);
  });

  it('Debe crear un credito', () => {
    let credit: creditDomain = new creditDomain(
      'Calle 4c #89-27',
      2,
      'pruebemail@gmail.com',
      '123',
      '1006107608',
      'Orozco',
      'Cali',
      'Melendez',
      'Juan',
      '3122524567',
      10000
    );
    service.createCredits(credit);
    expect(service.getCreditsList).toContain(1);
  });
  */
});
