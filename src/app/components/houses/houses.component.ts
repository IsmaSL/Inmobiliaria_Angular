import { Component, OnInit } from '@angular/core';
import { InmueblesAPIService } from '../../service/inmuebles-api.service';
import { Inmueble } from '../../domain/inmueble';

interface Estado {
  label?: string,
  value?: string
}

interface Filtro {
  label?: string,
  value?: string
}

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
})

export class HousesComponent implements OnInit {
  estados: Estado[] = [];
  filtros: Filtro[] = [];
  inmuebles: Inmueble[];
  selectedFiltro: string = '';
  selectedEstado: string = '';
  btnCleanFilters: boolean = false;
  price: number = 50000.00;
  stars: number = 5;
  constructor(public serv: InmueblesAPIService) {
    this.estados = [
      { label: 'Veracruz', value: 'Veracruz' },
      { label: 'Puebla', value: 'Puebla' },
    ];

    this.filtros = [
      { label: 'Estado', value: 'e' },
      { label: 'Precio', value: 'p' }
    ]
  }

  ngOnInit(): void {
    this.getListInmuebles();
  }

  getListInmuebles(): void {
    this.serv.getAllHouses().subscribe({
      next: (resp) => this.inmuebles = resp.response,
      error: (error) => {
        if (error.status === 404) {
          alert('Sin registros');
        } else {
          alert("Error al llamar al servicio");
          console.log(error);
        }
      },
      complete: () => this.btnCleanFilters = false
    });
  }

  onSubmit() {
    if (this.selectedFiltro === 'p'){ 
      if(this.price <= 0 || this.price === null) {
        alert("El precio no es valido");
      } else {
        this.serv.getByPrice(this.price).subscribe({
          next: (resp) => this.inmuebles = resp.response,
          error: (error) => {
            if (error.status === 404) {
              alert('Sin registros');
            } else {
              alert("Error al llamar al servicio");
              console.log(error);
            }
          },
          complete: () => this.btnCleanFilters = true
        });
      }
    } else if (this.selectedFiltro === 'e' && 
              (this.selectedEstado !== '' || this.selectedEstado !== null)) {
      this.serv.getByState(this.selectedEstado).subscribe({
        next: (resp) => this.inmuebles = resp.response,
        error: (error) => {
          if (error.status === 404) {
            alert('Sin registros');
          } else {
            alert("Error al llamar al servicio");
            console.log(error);
          }
        },
        complete: () => this.btnCleanFilters = true
      });          
    } else {
      alert("Faltan datos");
    }
  }
}
