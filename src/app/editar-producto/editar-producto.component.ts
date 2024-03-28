import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  constructor(private productoServicio: ProductoService,
    private ruta: ActivatedRoute, //Recibe el id
    private enrutador: Router){}

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id']; //obtiene id de la URL
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos //los datos en la variable tipo producto con la informacion
        ,
        error: (errores: any) => console.log(errores)///imprime el error
      }
    );
  }  

  onSubmit(){  //carga el formulario editar-producto.component.html
    this.guardarProducto();
  }

  guardarProducto(){  //editar producto es el mismo guardar producto
    this.productoServicio.editarProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
         //lo redirigimos producto lista no usamos los datos
        error: (errores) => console.log(errores)
      }
    );
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }
}


