import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Contacto, ContactoService} from 'src/app/SERVICES/contacto.service'


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  //objeto para tomar datos del html con ngMOdel
  contactoNuevo: Contacto={Nombre:'',Telefono:'',CorreoElectronico:'', FechaNacimiento:'1900-01-01'};
  constructor(private contactoService: ContactoService, private router: Router) { }

  ngOnInit() {
  }
  
  //consutla servicion para insertar contacto nuevo
  crearContacto(){
    //valida campos vacios en el form
    if (this.contactoNuevo.Nombre == '' ||
        this.contactoNuevo.Telefono == '' ||
        this.contactoNuevo.CorreoElectronico == ''
    ) {
      alert('Diligencie todos los datos!')
    }
    else{
      //toma objeto contacto para enviarlo al servicio con los datos del form
      this.contactoService.addContacto(this.contactoNuevo).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/home'])
  
        },
        //muestra error del servicio
        err=>console.log(err)
      );
    }
    
  }

}
