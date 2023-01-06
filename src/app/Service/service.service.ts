import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private firestore: Firestore) { }


addItem(item:any){
  const itemRef = collection(this.firestore,'items');
  return addDoc(itemRef,item);
}

getItems():Observable<any[]>{
  const itemRef = collection(this.firestore,'items');
  return collectionData(itemRef,{idField:'id'}) as Observable<any[]>;
}

deleteItem(item:any){
    const itemDocRef = doc(this.firestore,`items/${item.id}`);
    return deleteDoc(itemDocRef);
  }



      

  
}
