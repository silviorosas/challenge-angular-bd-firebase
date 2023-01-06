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
  let answer = await Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((res) => {
  if (res.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})  
const res = await this.service.deleteItem(item);//para eliminar 
}


  






  

 

}
