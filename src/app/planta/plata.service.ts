import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private url: string | any;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';
  }

  getPlantas():Observable<any>{
    return this.http.get(this.url);
  }
}
