import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FavoritosService} from '../../services/favoritos.service';

import { DataserviceService } from "../../services/dataservice.service";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
 
})
export class FavoritosComponent implements OnInit {

  favoritos: Object[];
  idUser: string; 
  loggedIn: boolean=false;

  message:string;

  constructor(private data: DataserviceService,private toastr : ToastrService ,private router: ActivatedRoute,private favoritosService: FavoritosService) { }

  ngOnInit(): void {

    this.data.currentMessage.subscribe(message => this.message = message);

    this.router.queryParams.subscribe(params =>{
      this.idUser = JSON.parse(params['idUser']);
      
    });

    if(this.message.localeCompare(this.idUser)==0){
      this.loggedIn=true;
    }

    
     
    if(this.loggedIn){
    
    this.favoritosService.getFavoritos(this.idUser).snapshotChanges().subscribe(item=>{
      this.favoritos = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.favoritos.push(x as Object);
      })
    });
  }
  }

  deleteFavorito($key:string){
    
    this.favoritosService.deleteFavorito($key);
    this.toastr.success('Operación con éxito', 'El artículo ha sido removido de tus favoritos');
    
  }

}
