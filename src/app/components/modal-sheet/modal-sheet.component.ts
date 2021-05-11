import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import * as captalize from 'capitalize-pt-br'


@Component({
  selector: 'app-modal-sheet',
  templateUrl: './modal-sheet.component.html',
  styleUrls: ['./modal-sheet.component.css']
})
export class ModalSheetComponent implements OnInit {
  //================================================ geral ==========================================================//

  title: string = '';
  endereco: string = '';
  cidade: string = '';
  script: string = '';
  status_descricao: string = '';
  status: string = 'default';
  ip: string = '';
  lote: string = '';
  //================================================ Status ==========================================================//


  //semafoto
  semaforo_descri: string = 'Semaforo em Funcionamento';
  classCSSSemaforo: string = '';
  //MDE
  MDE_descri: string = 'MDE Ok ou Inexistente';
  classCSSSMDE: string = '';
  //MDI
  MDI_descri: string = 'MDI em Funcionamento';
  classCSSSMDI: string = '';
  //MDI
  MPT_descri: string = 'MPT em Funcionamento';
  classCSSSPT: string = '';
  //cameras
  camera_descri: string = 'Câmeras em Funcionamento';
  classCSSSCamera: string = '';
  //cameras
  falha_energia: string = 'Energia sem Anomalia';
  classCSSSfe: string = '';

  status_corrente: string = '';
  status_tensao: string = '';
  status_potencia: string = '';
  //sem enviar
  //energia
  noEnergy3: string = 'Energy';
  classCSSSCe3: string = '';
  //sem enviar
  noEnv1: string = '';
  classCSSSne1: string = '';
  ///sem enviar
  noEnv3: string = '';
  classCSSSne3: string = '';
  //detectora
  detect: string = 'Detectora em Funcionamento';
  classCSSSdetec: string = '';

  //=================================================== dados invetario ==================================================================//
  processaor: string = 'Sem Dados';
  qtdCam: string = 'Sem Dados';
  memory_ram: string = 'Sem Dados';
  mobit_ultis: string = 'Sem Dados';
  version_rsservicemanager: string = 'Sem Dados';
  ocr: string = 'Sem Dados';
  disk: string = 'Sem Dados';


  //=================================================== uso de dados ==================================================================//

  uso_sda_2: string = 'Sem Informações';
  uso_disco: string = 'Sem Informações';
  uso_sda_3: string = 'Sem Informações';
  uso_memoria: string = 'Sem Informações';
  uso_sda_8: string = 'Sem Informações';

  //=================================================== Itens Core ==================================================================//
  id_site: string = 'Sem Informações';

  conectividade_enlace: string = 'Sem Informações';
  n_inmetro: string = 'Sem Informações';
  registro_sanmf: string = 'Sem Informações';
  tip_site: string = 'Sem Informações';
  site_status = [{ site: '', status: '', icon: '' }]
  ccusto: string = 'Sem Informações';
  selo_detectora: string = 'Sem Informações';
  selo_metrologico_borneira: string = 'Sem Informações';

  constructor(private _bottomSheetRef: MatBottomSheetRef<ModalSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any[]) { }

  ngOnInit(): void {
    this.site_status.pop();
    this.data.map(element => {
      this.title = element.dados.equipamento;
      this.endereco = captalize.default(element.dados.endereco_mestre);
      this.cidade = captalize.default(element.dados.cidade);
      this.ip =  element.dados.ultimo_ip;
      this.lote = element.dados.data_lote;
      this.script = element.dados.data_script;
      this.status = element.dados.informacoes[0].status;

      if (element.dados.dados !== '{}' && element.dados.dados !== null) {
        //dados energia

        this.status_corrente = element.dados.dados.status_corrente
        this.status_tensao = element.dados.dados.status_tensao
        this.status_potencia = element.dados.dados.status_potencia
        //--------------- inventario------

        this.processaor = element.dados.inventario.processador;
        this.qtdCam = element.dados.inventario.qtd_cam;
        this.memory_ram = 'Memória Ram: ' + element.dados.inventario.memoria_ram + ' Gb'
        this.mobit_ultis = 'Versão do Utils: ' + element.dados.inventario.versao_mobitutils
        this.version_rsservicemanager = element.dados.inventario.versao_rsservicemanager
        this.ocr = element.dados.inventario.ocr + " | serial: " + element.dados.inventario.ocrserial
        this.disk = element.dados.inventario.tamanho_disco + ' Gb'

        //----------------- uso de dados ---------------------------------
        this.uso_sda_2 = element.dados.dados.uso_sda_2;
        this.uso_disco = element.dados.dados.uso_disco;
        this.uso_sda_3 = element.dados.dados.uso_sda_3;
        this.uso_memoria = element.dados.dados.uso_memoria;
        this.uso_sda_8 = element.dados.dados.uso_sda_8;


      }




      if (this.status !== "NORMAL" && this.status !== "VAZIO") {

        //console.log(this.getStatusComponents(this.status, element.dados.informacoes[0].descricao));
        let whatComponent = this.getStatusComponents(this.status, element.dados.informacoes[0].descricao)


        whatComponent.forEach(element => {
          if (typeof element['component'] !== 'undefined') {
            if (element['component'].indexOf('SEMAFORO') >= 0) {

              this.semaforo_descri = captalize.default(element['status_descript']);
              this.classCSSSemaforo = element['css'];

            } else if (element['component'].indexOf('MDI') >= 0) {

              this.MDI_descri = captalize.default(element['status_descript']);
              this.classCSSSMDI = element['css'];

            } else if (element['component'].indexOf('CAMERA') >= 0) {

              this.camera_descri = captalize.default(element['status_descript']);
              this.classCSSSCamera = element['css'];

            } else if (element['component'].indexOf('MPT') >= 0) {

              this.MPT_descri = captalize.default(element['status_descript']);
              this.classCSSSPT = element['css'];

            } else if (element['component'].indexOf('MDE') >= 0) {

              this.MDE_descri = captalize.default(element['status_descript']);
              this.classCSSSMDE = element['css'];


            } else if (element['component'].indexOf('DETECTORA') >= 0) {

              this.detect = captalize.default(element['status_descript']);
              this.classCSSSdetec = element['css'];

            } else if (element['component'].indexOf('FALHA_ENERGIA') >= 0) {

              this.falha_energia = captalize.default(element['status_descript']);
              this.classCSSSfe = element['css'];

            } else if (element['component'].indexOf('SEM_ENVIAR1') >= 0) {

              this.noEnv1 = captalize.default(element['status_descript']);
              this.classCSSSne1 = element['css'];

            } else if (element['component'].indexOf('SEM_ENVIAR3') >= 0) {

              this.noEnv3 = captalize.default(element['status_descript']);
              this.classCSSSne3 = element['css'];

            }

          }
        });

      } else if (this.status === "VAZIO") {
        //semafoto
        this.semaforo_descri = 'Sem Informações';
        //MDE
        this.MDE_descri = 'Sem Informações';
        //MDI
        this.MDI_descri = 'Sem Informações';
        //MDI
        this.MPT_descri = 'Sem Informações';
        //cameras
        this.camera_descri = 'Sem Informações';
        //cameras
        this.falha_energia = 'Sem Informações';
        //cameras
        this.noEnergy3 = 'Sem Informações';
        //detectora
        this.detect = 'Sem Informações';
      }




      if (element.dados !== '{}' && element.dados !== null) {
        if (element.dados.sites !== null) {
          if (element.dados.sites[0].site_dados_core !== 'null' && element.dados.sites[0].site_dados_core !== null  && element.dados.sites[0].site_dados_core !== '') {

            this.id_site = element.dados.sites[0].site_dados_core.ld === 'null' ? 'Sem Informações' : element.dados.sites[0].site_dados_core.ld;
            this.conectividade_enlace = element.dados.sites[0].site_dados_core.conectividade_enlace === 'null' ? 'Sem Informações' : element.dados.sites[0].site_dados_core.conectividade_enlace;
            this.n_inmetro = element.dados.sites[0].site_dados_core.n_inmetro === "null" ? 'Sem Informações' : element.dados.sites[0].site_dados_core.n_inmetro;
            this.registro_sanmf = element.dados.sites[0].site_dados_core.registro_sanmf === "null" ? 'Sem Informações' : element.dados.sites[0].site_dados_core.registro_sanmf;
            this.tip_site = element.dados.sites[0].site_dados_core.tipo === "null" ? 'Sem Informações' : element.dados.sites[0].site_dados_core.tipo;
            this.ccusto = element.dados.sites[0].site_dados_core.ccusto === "null" ? 'Sem Informações' : element.dados.sites[0].site_dados_core.ccusto;
            this.selo_metrologico_borneira = element.dados.sites[0].site_dados_core.selo_metrologico_borneira === "null" ? 'Sem Informações' : element.dados.sites[0].site_dados_core.selo_metrologico_borneira ;

            element.dados.sites.forEach(el => {
              if (el.site_dados_core.site_status === 'IN_OPERATION') {

                this.site_status.push({ site: el.site_dados_core.site_, status: 'Em Operação', icon: 'check_box' })
              }else if( el.site_dados_core.site_status === 'IMPLANTATION'){

                this.site_status.push({ site: el.site_dados_core.site_, status: 'Implantação', icon: 'speaker_phone' })

              }else if( el.site_dados_core.site_status === 'OUT_OPERATION'){

                this.site_status.push({ site: el.site_dados_core.site_, status: 'Fora de Operação', icon: 'indeterminate_check_box' })

              }else if( el.site_dados_core.site_status === 'IN_PARTIAL_OPERATION'){

                this.site_status.push({ site: el.site_dados_core.site_, status: 'Fora de Operação', icon: 'offline_pin' })

              }else if( el.site_dados_core.site_status === 'MAINTENANCE'){

                this.site_status.push({ site: el.site_dados_core.site_, status: 'Manutenção', icon: 'build' })

              }

            });
          }
        }
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

  getStatusComponents(status: string, data) {

    let dataStatus = [{}];



    if (status !== 'VAZIO') {
      data.forEach(element => {
        if (element.indexOf('SEMAFORO') >= 0) {

          data.forEach(el => {
            if (el.indexOf('AMARELO') >= 0) {
              dataStatus.push({ component: 'SEMAFORO', css: 'yellow', status_descript: el })
            } else if (el.indexOf('SINCRONISMO') >= 0) {
              dataStatus.push({ component: 'SEMAFORO', css: 'red', status_descript: el })
            }
          });
        } else if (element.indexOf('MDE') >= 0) {
          dataStatus['component'] = 'MDE';
          data.forEach(el => {
            if (el.indexOf('2:') >= 0) {

              dataStatus.push({ component: 'MDE', css: 'red', status_descript: el });

            } else {
              dataStatus.push({ component: 'MDE', css: 'yellow', status_descript: el });
            }
          });

        } else if (element.indexOf('MDI') >= 0) {

          dataStatus.push({ component: 'MDI', css: 'yellow', status_descript: element });

        } else if (element.indexOf('MPT') >= 0) {

          dataStatus.push({ component: 'MPT', css: 'yellow', status_descript: element });

        } else if (element.indexOf('CAMERA') >= 0) {

          dataStatus.push({ component: 'CAMERA', css: 'red', status_descript: element });
        } else if (element.indexOf('DETECTORA') >= 0) {

          dataStatus.push({ component: 'DETECTORA', css: 'red', status_descript: element });


        } else if (element.indexOf('FALHA DE ENERGIA') >= 0) {

          dataStatus.push({ component: 'FALHA_ENERGIA', css: 'yellow', status_descript: element });

        } else if (element.indexOf('FALTA DE ENERGIA') >= 0) {

          dataStatus.push({ component: 'FALTA_ENERGIA', css: 'yellow', status_descript: element });

        } else if (element.indexOf('SEM ENVIAR POR PELO MENOS 1 HORA') >= 0) {

          dataStatus.push({ component: 'SEM_ENVIAR1', css: 'yellow', status_descript: element });

        } else if (element.indexOf('ENVIO ATRASADO POR MAIS DE 3 HORAS') >= 0) {

          dataStatus.push({ component: 'SEM_ENVIAR3', css: 'marrom', status_descript: element });

        }
      });
    }
    return dataStatus;
  }

}
