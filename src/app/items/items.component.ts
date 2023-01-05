import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemComponent implements OnInit {

  formFilter: any;

   /*conectado con button por medio de (click)="save()"  */
   producto:any ={
    id: 0,
    nombre:"",
    email:"",
    fecha:"",
    pais:""   
  };
  idContador: number = 0;
  datos:any[]=[];

  constructor(private fb: FormBuilder, private service:ServiceService,private router: Router) { }

  ngOnInit(): void {
  //Defino formulario como una propiedad y valido que los campos son requeridos:
   this.formFilter = this.fb.group({      
    nombre: ['', [Validators.required, Validators.minLength(3),Validators.pattern("^[a-zA-Z ]+$")]],
    email: ['', [Validators.required,Validators.email]], 
    fecha: ['', Validators.required], 
    pais: ['', Validators.required],   
  });
  }

  async onSubmit(){
   
    const res = await this.service.addItem(this.formFilter.value);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Enviado con Éxito!!',          
    })  
    console.log("res",res);
    if (this.formFilter.valid) {      
      this.formFilter.reset() 
      this.router.navigateByUrl('/lista');    
    }else 
    Swal.fire({
      icon: 'error',
      title: 'Oops...ocurrió un error!!',
      text: 'Intente más tarde!',
     
    })
  }  

  //metodo para validar inputs form
 isValidField(name:string):boolean{
  const fieldName = this.formFilter.get(name);
  return fieldName.invalid && fieldName.touched;
 }

}
