import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Good } from '../../Interfaces/good.interface';
import { FurnituresService } from '../../Services/furnitures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  goods: Good[] = [];

  gObserve: Subscription;
  constructor(private fs: FurnituresService) {}

  ngOnInit(): void {
    this.gObserve = this.fs.getFurnituresData().subscribe((data) => {
      this.goods = data.map((el) => {
        return {
          id: el.payload.doc.id,
          ...(el.payload.doc.data() as {}),
          // name: el.payload.doc.data()['name'],
          // price: el.payload.doc.data()['price'],
          // photoUrl: el.payload.doc.data()['photoUrl'],
        };
      });
    });
  }
  ngOnDestroy(): void {
    this.gObserve.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  addToCart(id) {
    console.log('addedToCart ', id);
  }
}
