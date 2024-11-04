import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaListComponent } from './planta-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { Planta } from '../planta';
import { Observable, of } from 'rxjs';
import { PlantaService } from '../plata.service';
import { By } from '@angular/platform-browser';

describe('PlataListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let plantaService: PlantaService;
  let plantasFake: Planta[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PlantaListComponent,
        HttpClientTestingModule
      ],
      providers: [PlantaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    fixture.detectChanges();
  });

  beforeEach( async ()=>{
    plantasFake = Array.from({ length: 3 }, () => generarPlantaAleatorio());

    spyOn( plantaService, 'getPlantas' ).and.returnValue(of(plantasFake));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPlanta, Comprobar que retorne 3 elementos de plantas en la función', ()=>{
    component.getPlanta();
    expect( component.plantas.length ).toBe(3);

    setTimeout(()=>{
      const filas = fixture.debugElement.queryAll(By.css('table tr'));
      const encabezado = fixture.debugElement.queryAll(By.css('table thead'));
      expect(filas.length).toBe(3);
      expect(encabezado.length).toBe(1);
    }, 500 )
  });
  
});

function obtenerValorAleatorio<T>(): T {
  let opciones: any =  ['Interior', 'Exterior'];
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

function generarPlantaAleatorio(): Planta {
  return {
    "id": faker.number.int({ min: 1, max: 1000 }),
    "nombre_comun": faker.name.fullName(),
    "nombre_cientifico": faker.name.fullName(),
    "tipo": obtenerValorAleatorio(),
    "altura_maxima": faker.number.int({ min: 0, max: 300 }),
    "clima": faker.name.fullName(),
    "sustrato_siembra": faker.name.fullName()
  };
}
