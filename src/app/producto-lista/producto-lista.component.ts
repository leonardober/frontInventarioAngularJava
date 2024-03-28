import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista', //esta en app.component.html para llamar al componente producto lista
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {
  productos: Producto[]; //Recibimos objetos tipo producto
  //producto servicio nos permite conectar a la capa de servicio
  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  ngOnInit() {
    //inicializa
    //Cargamos los productos
    this.obtenerProductos();
  }

  private obtenerProductos() {
    // Consumir los datos del observable (suscribirnos)
    this.productoServicio.obtenerProductosLista().subscribe(
      (datos) => {
        //el arreglo  producto[] esta guardado(asignado) en variable datos
        this.productos = datos; //asignacion de datos recibidos
      } // ya podemos utilizar la Vista Generacion dinamica
    );
  }

  editarProducto(id: number) {
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(), //obtenerProducto porque estamos dentro producto-Lista.component
      error: (errores) => console.log(errores),
    });
  }
}
