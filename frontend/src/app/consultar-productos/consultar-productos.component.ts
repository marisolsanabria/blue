import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../models/product.model';
import { ProductoService } from '../services/producto.service';
import{Subscription} from 'rxjs';

@Component({
  selector: 'app-consultar-productos',
  templateUrl: './consultar-productos.component.html',
  styleUrls: ['./consultar-productos.component.css']
})
export class ConsultarProductosComponent implements OnInit, OnDestroy {

  productos: Producto[] = [];
  productoSub: Subscription;
  errorMessage = "Este campo es requerido";

  constructor(public productosService: ProductoService) {
    this.productoSub = this.productosService.getProductosUpdateListener().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
   }

  ngOnInit(): void {
    this.productoSub = this.productosService.getProductosUpdateListener().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.productos = this.productosService.productos;
  }

  ngOnDestroy(): void {
    this.productoSub.unsubscribe();
  }

  //Función para campos requeridos
  getErrorMessage(){
    return this.errorMessage;
  }

}
