import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({  //para utilizar el servicio desde otras clases Producto-lista componenent
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/inventario-app/productos";

  constructor(private clienteHttp: HttpClient) { }  //para hacer las peticiones al backend
 //Methodo para obrener productos
  obtenerProductosLista(): Observable<Producto[]>{ //Observable se debe subscribe para otener productos
    return this.clienteHttp.get<Producto[]>(this.urlBase);//regresa Producto[] dentro de un Observable
  } //en Este momento springboot debe estar funcionando
  //peticion asincrona Observable y se suscribe a component
  //permitiendo comunicacion entre servicios y component
  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto);
  } //recibimos Producto que es observable Objeto y enviamos el producto
  

  obtenerProductoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }
///envia informacion al backend del metodo PUT
  editarProducto(id: number, producto: Producto): Observable<Object>{
    return this.
    clienteHttp.put(`${this.urlBase}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
