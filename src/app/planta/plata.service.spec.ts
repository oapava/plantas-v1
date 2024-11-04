import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantaService } from './plata.service';

describe('PlataService', () => {
  let service: PlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
