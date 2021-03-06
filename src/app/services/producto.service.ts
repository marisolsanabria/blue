import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Producto } from '../models/product.model';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl + "/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {



  productos: Producto[] = [];
  productoUpdated = new Subject<Producto[]>();

  constructor(private router: Router, private http: HttpClient) {}

  addProducto(producto:Producto) {
    this.http
      .post<{ message: string }>(url, producto)
      .subscribe((response) => {
        console.log(response);
        this.productos.push(producto);
        //Agregar modal que indique un mensaje "Producto eliminado con éxito" ---Utilizando SweetAlert2

        // Generar notificacion de actualizacion a los componentes suscritos al Subject
        this.productoUpdated.next([...this.productos]);
        this.router.navigate(['/']);
      });
  }

  getProductos() {
    this.http
      .get<any>(url)
      .pipe(
        map((productsData) => {
          return productsData.map(
            (producto: {
              _id: string;
              nombre:string;
              categoria:string;
              cantidad:number;
              precio:number;
            }) => {
              return {
                id: producto._id,
                nombre:producto.nombre,
                categoria:producto.categoria,
                cantidad:producto.cantidad,
                precio:producto.precio
              };
            }
          );
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.productos = response;
        this.productoUpdated.next([...this.productos]);
      });
  }

  deleteProducto(id: string) {
    this.http.delete(`${url}/${id}`).subscribe((response) => {
      console.log(response);
      const productosFiltered = this.productos.filter((producto) => producto.id != id);
      this.productos = productosFiltered;
      this.productoUpdated.next([...this.productos]);
      //Agregar modal que indique un mensaje "Producto eliminado con éxito" ---Utilizando SweetAlert2
    });
  }

  updateProducto(producto:Producto, id: string) {
      this.http.put(`${url}/${id}`, producto).subscribe((response) => {
      const newProductos = [...this.productos];
      const oldProductIndex = newProductos.findIndex((producto) => producto.id === id);
      newProductos[oldProductIndex] = producto;
      this.productoUpdated.next([...this.productos]);
      this.router.navigate(['/']);
    });
  }

  getProducto(id: string) {
    return this.http.get<{
     _id:string;
     nombre:string;
     categoria:string;
     cantidad:number;
     precio:number;
    }>(`${url}/${id}`);
  }

  getProductosUpdateListener() {
    return this.productoUpdated.asObservable();
  }

}
