import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';

  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  power = 2;

  products: Product[] = [
    {
      id: '2',
      title: 'Hoodie',
      image: '../assets/images/hoodie.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      title: 'Mug',
      image: '../assets/images/mug.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      title: 'Pin',
      image: '../assets/images/pin.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      title: 'Stickers',
      image: '../assets/images/stickers1.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      title: 'Stickers',
      image: '../assets/images/stickers2.png',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  addItem() {
    this.array.push(this.title);
  }

  deleteItem(index: number) {
    this.array.splice(index, 1);
  }

  clickItem(id: string){
    console.log('product');
    console.log(id);
  }
}
