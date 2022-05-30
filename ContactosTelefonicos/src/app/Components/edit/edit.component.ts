import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contacto, ContactoService } from '../../SERVICES/contacto.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  //captura json de consulta por id
  obj:any = [];
  //recibe id del home para consultar por id
  id:string=""; 
  //Objeto Contacto instanciado para guardar datos de contacto recibidos de consulta por id
  editarContacto: Contacto={idContacto:'',Nombre:'',Telefono:'',CorreoElectronico:'', FechaNacimiento:"1900-01-01"};
  
  //constructor 
  constructor(private contactoService:ContactoService, private route: ActivatedRoute, private router:Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    //captura id enviado del home-editar
    this.id= this.route.snapshot.params['id'];
    
    //consulta servicio que consulta contacto por id y los inserta en objeto contacto para actualizar en el ngMOdel
    this.contactoService.getContactoId(this.id).subscribe(
      res=>{
        this.obj=res;
        console.log(this.obj[0].Nombre);
        this.editarContacto.Nombre=this.obj[0].Nombre;
        this.editarContacto.Telefono=this.obj[0].Telefono;
        this.editarContacto.CorreoElectronico=this.obj[0].CorreoElectronico;
        this.editarContacto.FechaNacimiento=String(this.datepipe.transform(this.obj[0].FechaNacimiento,'yyyy-MM-dd'));
      },
    //si hay error en el servcio - muestra el error
      err=>console.log(err)
    );
  }

  //Accion boton ACTUALIZAR - envia datos al servicio para actualizar contacto
  actualizarContacto(){
    console.log(this.editarContacto);
    this.contactoService.updContacto(this.id, this.editarContacto).subscribe(
      res=>{
        this.router.navigate(['/home']);
      },
//si hay error en el servcio - muestra el error
      err=>console.log(err)
    );
  }

}
