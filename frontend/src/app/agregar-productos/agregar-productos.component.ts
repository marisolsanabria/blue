import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Producto } from '../models/product.model';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})


export class AgregarProductosComponent implements OnInit {

  private isEditing = false;
  private productoId!: string;
  errorMessage = "Este campo es requerido";

  producto: Producto ={
    id:'',
    nombre:'',
    categoria:'',
    cantidad: 0,
    precio: 0,
  };

  constructor(public productoService: ProductoService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("productoId")){
        this.isEditing = true;
        this.productoId = paramMap.get("productoId")!;
        this.productoService.getProducto(this.productoId).subscribe((productData) => {
        this.producto = {id: productData._id, nombre: productData.nombre, categoria: productData.categoria,cantidad: productData.cantidad,precio: productData.precio};
        })
      }else{
        this.isEditing = false;
      }
    })
  }

  guardarProducto(form: NgForm){
    if(form.invalid){
      return;
    }

    if(this.isEditing){
      this.productoService.updateProducto(form.value,this.productoId);
    }else{
      this.productoService.addProducto(form.value);
    }
    form.resetForm();
  }

    //Función para campos requeridos
    getErrorMessage(){
      return this.errorMessage;
    }
}
