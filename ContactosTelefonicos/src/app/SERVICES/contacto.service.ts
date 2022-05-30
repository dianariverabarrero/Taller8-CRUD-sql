import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  
  url= '/api';
  constructor(private http: HttpClient) { }

  //Listar todos los contactos - 
  getContactos(){
    return this.http.get(this.url);
  }

  //Listar contacto por id
  getContactoId(id:string){
    return this.http.get(this.url+'/'+id)
  }

  //Crear contacto
  addContacto(contacto:Contacto){
    return this.http.post(this.url, contacto)
  }
  
  //Eliminar contacto
  delContacto(id:string){
    return this.http.delete(this.url+'/'+id)
  }

  //Actualizar contacto
  updContacto(id:string, contacto:Contacto){
    return this.http.put(this.url+'/'+id, contacto)
  }

}

//interface que consultan los components
export interface Contacto{
  idContacto?:string;
  Nombre?:string;
  Telefono?:string;
  CorreoElectronico?:string;
  FechaNacimiento?:string;

}