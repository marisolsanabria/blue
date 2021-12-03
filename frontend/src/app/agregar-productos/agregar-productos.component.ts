import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../models/product.model';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})


export class AgregarProductosComponent implements OnInit {

  content: string = "Hola mundo";
  texto: string = "";


  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {}


  agregarProducto(form: NgForm){
    this.productoService.addProducto(form.value);
    form.resetForm();
  }
}
