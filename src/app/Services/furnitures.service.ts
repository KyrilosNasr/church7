import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FurnituresService {
  constructor(private fs: AngularFirestore) {}

  getFurnituresData() {
    return this.fs.collection('/Furnitures').snapshotChanges();
  }
}
