import { Injectable,EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
// import { RightSidenavComponent } from '../right-sidenav/right-sidenav.component';

@Injectable()
export class SearachnavService {

	private sidenav!: MatSidenav;

	emiterFilterContract = new EventEmitter<[]>();

	emiterFilterStatus = new EventEmitter<[]>();


//adiciona filtro cntratos
	getFilterContract( filter ) {

		this.emiterFilterContract.emit( filter );
	}
	//remove filtro Contratos
	removeFilterContact( filter ) {

		this.emiterFilterContract.emit( filter );
	}

	//adiciona filtro cntratos
	getFilterStatus( filter ) {

		this.emiterFilterStatus.emit( filter );
	}

	//remove filtro Contratos
	removeFilterStatus( filter ) {

		this.emiterFilterStatus.emit( filter );
	}






	public setSidenav(sidenav: MatSidenav) {
		this.sidenav = sidenav;
	}

	public open() {
		return this.sidenav.open();
	}


	public close() {
		return this.sidenav.close();
	}

	public toggle() {
		return this.sidenav.toggle();
	}
}