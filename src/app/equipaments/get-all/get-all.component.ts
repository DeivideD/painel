import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Equipaments } from '../shared/equipament.model';
import { EquipamentService } from '../service';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})


export class GetAllComponent implements OnInit  {
  displayedColumns: string[] = ['status', 'eqp', 'sereal', 'lastIP', 'script','lot'];
  options: string[] = ['Todos','Vazio', 'Normal', 'Atrasado', 'Alerta', 'Critico'];
  filteredOptions: Observable<string[]> | undefined ;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined ;
  @ViewChild(MatSort) sort: MatSort | undefined;
  equipaments: Equipaments[] = [];
  sortedData: Equipaments[] = [];
  myControl = new FormControl();
  isLoading = true;
  dataSource;
  aux;
  
  constructor(private EquipamentService: EquipamentService, private router: Router, public dialog: MatDialog) {


  }

  ngOnInit(): void {
 

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.getEquipaments();
  }


  getEquipaments() {
    this.EquipamentService.getAllEquipaments().subscribe((data: any) => {
      this.equipaments = data.dados;
      this.dataSource = new MatTableDataSource(this.equipaments); //carrego a variavel de filtro
      this.dataSource.paginator = this.paginator;
      this.aux = this.dataSource;
      //console.log(this.equipaments);
      this.isLoading = false;
    }, error => {
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Carregar Aplicação ' , description: 'Error ' + error.status + ' - ' + error.error.descricao + ' Faça login novamente.' }]
      });
    });
  }



  //filtros
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  applyFilterBase(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterContrato(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  private _filter(filter: string): string[] {
    const filterValue = filter.toLowerCase();
    var data

     //= this.aux.filteredData;
     if( typeof this.aux != 'undefined' ){
      data = this.aux.filteredData;
     }
   
    if (filter != '' && filter != 'Todos') {

      function retornaEstado( value ) {
        if (value.informacoes[0].status.toLowerCase() == filter.toLowerCase())
          return value;
      }

      var result = data.filter(retornaEstado);

      this.dataSource = new MatTableDataSource(result); //carrego a variavel de filtro
      this.dataSource.paginator = this.paginator;
      //this.dataSource.filteredData = this.aux;
    }else if ( filter == 'Todos'){
      this.dataSource = new MatTableDataSource(this.aux.filteredData); 
      this.dataSource.paginator = this.paginator;
    }
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


}


