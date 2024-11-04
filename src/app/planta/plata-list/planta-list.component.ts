import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../plata.service';
import { CommonModule } from '@angular/common';
import { Planta } from '../planta';

@Component({
  selector: 'app-planta-list',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './planta-list.component.html',
  styleUrl: './planta-list.component.scss'
})
export class PlantaListComponent implements OnInit{
  public plantas: Planta | any;
  public email: string;
  public social: string;
  public interior: any;
  public exterior: any;

  constructor(
    private plantaService: PlantaService
  ){
    this.email = 'info@viveroelotonio.com';
    this.social = '@viveroelotonio';
  }

  ngOnInit(): void {
    this.getPlanta();
  }

  getPlanta(){
    this.plantaService.getPlantas()
      .subscribe( plantas=> {
        this.plantas = plantas;
        this.interior = this.plantas.filter( (planta:Planta) => planta.tipo === 'Interior' ).length;
        this.exterior = this.plantas.filter( (planta:Planta) => planta.tipo === 'Exterior' ).length;
      });
  }

  getSumaryInterior(){

  }
}
