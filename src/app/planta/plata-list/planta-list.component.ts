import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../plata.service';

@Component({
  selector: 'app-planta-list',
  standalone: true,
  imports: [],
  templateUrl: './planta-list.component.html',
  styleUrl: './planta-list.component.scss'
})
export class PlataListComponent implements OnInit{
  constructor(
    private plantaService: PlantaService
  ){}

  ngOnInit(): void {
    this.getPlanta();
  }

  getPlanta(){
    this.plantaService.getPlantas()
      .subscribe( plantas=> {
        console.log(plantas);
      });
  }
}
