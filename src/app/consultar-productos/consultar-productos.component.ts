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
  // productos1: Producto[] = [{id:"1", nombre:"Aguacate", categoria:"viveres", cantidad:4, precio:10000}];
  // displayedColumns: string[] = ['id', 'nombre', 'categoria', 'cantidad','precio'];
  dataSource = this.productos;
  productoSub: Subscription;

  constructor(public productosService: ProductoService) {
    this.productoSub = this.productosService.getProductosUpdateListener().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
   }

  ngOnInit(): void {
    this.productosService.getProductos();
    this.productoSub = this.productosService.getProductosUpdateListener().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.productos = this.productosService.productos;
  }

  ngOnDestroy(): void {
    this.productoSub.unsubscribe();
  }


  onDelete(id: string){
    this.productosService.deleteProducto(id);
  }
}
