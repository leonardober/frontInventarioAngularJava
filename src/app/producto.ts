export class Producto {
    idProducto: number;
    descripcion: string;
    precio: number;
    existencia: number;
}
/*como idproducto no tiene inicializador
y no esta asignada al constructor vamos a tsconfig.json
"strictPropertyInitialization": false, */