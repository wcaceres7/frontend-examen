import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private _ProductoService: ProductoService){}

  ngOnInit():void{
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._ProductoService.getProductos().subscribe(data =>{
      console.log(data);
    }, error=>{
      console.log(error);
    }
    )

  }


}
