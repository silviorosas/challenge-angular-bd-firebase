import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  
  items: any[] = [];

  constructor(private service:ServiceService) { }

  ngOnInit() {
  this.getItems()  
  }

  getItems(){
    this.service.getItems()
    .subscribe((data:any)=>{
      this.items=data;
      console.log(this.items)
    })
  }

 async deleteItem(item:any){
  const res = await this.service.deleteItem(item);   
  }

  






  

 

}
