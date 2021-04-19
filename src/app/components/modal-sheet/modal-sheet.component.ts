import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-modal-sheet',
  templateUrl: './modal-sheet.component.html',
  styleUrls: ['./modal-sheet.component.css']
})
export class ModalSheetComponent implements OnInit {
  title;
  endereco;
  cidade;
  script;
  status_descricao
  status;
  ip;
  lote;

  constructor(private _bottomSheetRef: MatBottomSheetRef<ModalSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any[]) { }

  ngOnInit(): void {
    this.data.map(element => {

      console.log(element);
      this.title = element.dados.equipamento;
      this.endereco = element.dados.endereco_mestre;
      this.cidade = element.dados.cidade;
      this.ip = element.dados.ultimo_ip;
      this.lote = element.dados.data_lote;
      this.script = element.dados.data_script;

      element.dados.informacoes.map(el =>{
        this.status = el.status.toUpperCase();
        this.status_descricao = el.descricao
      });


      if (this.status =='NORMAL'){
        console.log('norma');
      }
    });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeDialog(event: MouseEvent): void {

    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
