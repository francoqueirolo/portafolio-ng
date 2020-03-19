import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  team: any[];
  

  constructor( private http: HttpClient ) {
    this.loadInfo();
    this.loadTeam();

  }

  loadInfo() {
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
        });
  }

  loadTeam() {
    this.http.get('https://ng-portafolio-43934.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.team = resp;
        console.log(resp);
      });
  }

}



