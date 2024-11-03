import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataListComponent } from './planta-list.component';

describe('PlataListComponent', () => {
  let component: PlataListComponent;
  let fixture: ComponentFixture<PlataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlataListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
