import { Injectable } from '@angular/core';
import { Address } from './address';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  saveAddress(address: Address){
    console.log("from service class")
    this.fireStore.collection("address").add({...address})
  }
}
