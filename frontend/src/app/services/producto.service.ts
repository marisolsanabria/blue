import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Producto } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:3000/api/productos';

  productos: Producto[] = [];
  productoUpdated = new Subject<Producto[]>();

  constructor(private router: Router, private http: HttpClient) {}

  addProducto(producto:Producto) {
    this.http
      .post<{ message: string }>(this.url, producto)
      .subscribe((response) => {
        console.log(response);
        this.productos.push(producto);
        // Generar notificacion de actualizacion a los componentes suscritos al Subject
        this.productoUpdated.next([...this.productos]);
        this.router.navigate(['/']);
      });
  }

  getProductos() {
    this.http
      .get<any>(this.url)
      .pipe(
        map((postsData) => {
          return postsData.map(
            (producto: {

              nombre:string;
              categoria:string;
              cantidad:number;
              precio:number;
            }) => {
              return {

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
    this.http.delete(`${this.url}/${id}`).subscribe((response) => {
      console.log(response);
      const productosFiltered = this.productos.filter((producto) => producto.id != id);
      this.productos = productosFiltered;
      this.productoUpdated.next([...this.productos]);
    });
  }

  updateProducto(producto:Producto, id: string) {
    this.http.put(`${this.url}/${id}`, producto).subscribe((response) => {
      const newProductos = [...this.productos];
      const oldProductIndex = newProductos.findIndex((producto) => producto.id === id);
      newProductos[oldProductIndex] = producto;
      this.productoUpdated.next([...this.productos]);
      this.router.navigate(['/']);
    });
  }

  getProducto(id: string) {
    return this.http.get<{
     nombre:string;
     categoria:string;
     cantidad:number;
     precio:number;
    }>(`${this.url}/${id}`);
  }

  getProductosUpdateListener() {
    return this.productoUpdated.asObservable();
  }

}
