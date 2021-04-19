import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl'
import { AplicationService } from 'src/app/shared';
import { Equipaments } from 'src/app/equipaments/shared/equipament.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/components/dialog/dialogs.component'
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ModalSheetComponent } from '../modal-sheet/modal-sheet.component';






var map = mapboxgl.Mapa;
// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});


// Add checkbox and label elements for the layer.


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  geojson: any[] = [];
  map = mapboxgl.Mapa;
  equipaments: Equipaments[] = [];
  toggleActive: boolean = false;

  constructor(
    
    private aplicationService: AplicationService,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {

    mapboxgl.accessToken = environment.mapKey;
    map = new mapboxgl.Map({
      container: 'principal-map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-38.503494, -3.834618], // starting position //latitude longitude
      zoom: 12.8// starting zoom
    });


    //comentar depois
    this.getAllMarks();

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());


  }

  getAllMarks() {
    this.aplicationService.getAllEquipaments().subscribe((data: any) => {
      this.equipaments = data.dados;
      this.generateHtml(this.equipaments);
    }, error => {
      this.dialog.open(DialogsComponent, {
        data: [{ cod: 'Erro ao Carregar Aplicação ', description: 'Error ' + error.status + ' - ' + error.error.descricao + ' Faça login novamente.' }]
      });
    });
  }

  generateHtml(data) {
    data.forEach(marker => {
      let img = '';
      marker.informacoes.map(es => {
        img = es.status.toLowerCase();
      });

      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(/assets/images/' + img + '.png )';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.backgroundSize = '100%';
      el.style.cursor = 'pointer';
      el.style.borderRadius = '50%';

      //el.addEventListener('click', 'this.openBottomSheet()');

      el.addEventListener('click', (evt) => this.openBottomSheet(marker));

      /*
      
      
            el.addEventListener('mouseenter',  function (e) {
              // Change the cursor style as a UI indicator.
              map.getCanvas().style.cursor = 'pointer';
        
              var coordinates = [marker.longitude, marker.latitude].slice();
              var description = '<h4>'+ marker.equipamento + '</h4>';
        
              // Ensure that if the map is zoomed out such that multiple
              // copies of the feature are visible, the popup appears
              // over the copy being pointed to.
          
              // Populate the popup and set its coordinates
              // based on the feature found.
              popup.setLngLat(coordinates).setHTML(description).addTo(map);
            });
        
            el.addEventListener('mouseleave', function () {
              map.getCanvas().style.cursor = '';
              popup.remove();
            }); */

      new mapboxgl.Marker(el)
        .setLngLat([marker.longitude, marker.latitude])
        .addTo(map);
    });
  }

  openBottomSheet(marker) {
    //console.log(marker);
    this._bottomSheet.open(ModalSheetComponent, {
      data: [{ dados: marker, 'type': 'info Corujita' }]
    });
  }
}
