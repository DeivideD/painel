import { SearachnavService } from './searach.service';
import { MatSidenav } from '@angular/material/sidenav'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-sidebar-searach',
  templateUrl: './sidebar-searach.component.html',
  styleUrls: ['./sidebar-searach.component.css']
})
export class SidebarSearachComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  visible = true;
  selectable = true;
  removable = true;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Detran', 'AMC', 'Caucaia', 'DNIT'];


//--------------------------------filtro status --------------
  statusCtrl = new FormControl();
  filteredStatus: Observable<string[]>;
  status: string[] = [];
  allStatus: string[] = ['Vazio','Normal', 'Critico', 'Alerta','Atrasado'];


  @ViewChild('searachNave', { static: true }) public searachNave: MatSidenav;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  //--------------filtro status --------------
  @ViewChild('statusInput') statusInput: ElementRef<HTMLInputElement>;


  constructor(private searachnavService: SearachnavService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));


      this.filteredStatus = this.statusCtrl.valueChanges.pipe(
        startWith(null),
        map((status: string | null) => status ? this._statusFilter(status) : this.allStatus.slice()));



  }

  ngOnInit(): void {
    //seta o elemento
    this.searachnavService.setSidenav(this.searachNave);
  }

  closeDialog() {
    this.searachnavService.toggle();
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.searachnavService.removeFilterContact( this.fruits );
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    this.searachnavService.getFilterContract(this.fruits);

  }




  addStatus(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.status.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.statusCtrl.setValue(null);
  }

  removeStatus(status: string): void {
    const index = this.status.indexOf(status);

    if (index >= 0) {
      this.status.splice(index, 1);
      this.searachnavService.removeFilterStatus( this.status );
    }
  }

  selectedStatus(event: MatAutocompleteSelectedEvent): void {
    this.status.push(event.option.viewValue);
    this.statusInput.nativeElement.value = '';
    this.statusCtrl.setValue(null);
    this.searachnavService.getFilterStatus(this.status);

  }

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }


  private _statusFilter(value: string): string[] {

    const filterValue = value.toLowerCase();
    return this.allStatus.filter(status => status.toLowerCase().indexOf(filterValue) === 0);
  }
}
