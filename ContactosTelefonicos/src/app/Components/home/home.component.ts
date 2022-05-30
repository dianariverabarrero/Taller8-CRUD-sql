import { Component, OnInit } from '@angular/core';
import {ContactoService} from '../../SERVICES/contacto.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //lista para guardar contactos recibidos
  lista:any=[];
  constructor(private ContactoService:ContactoService) { }

  ngOnInit(): void {
    this.listarContactos();
  }
  
  //consulta servicio y retorna todos los contactos para insertarlos en la tabla del home
  listarContactos(){
    this.ContactoService.getContactos().subscribe(
      res=>{
        this.lista=res,
        console.log(res);
      },
      err=>console.log(err)
    );
  }
  
  //accion boton eliminar - consulta servicio y envia id de contacto para eliminar
  eliminarContacto(id:string){
    this.ContactoService.delContacto(id).subscribe(
      res=>{
       this.ngOnInit();},
      err=>console.log(err)
    );
  }
}
