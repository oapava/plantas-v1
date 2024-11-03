import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlataListComponent } from "./planta/plata-list/planta-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlataListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plantas-v1';
}
