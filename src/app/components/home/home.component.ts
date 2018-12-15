import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product';
import { SharedService } from 'src/app/core/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: any = '';
  open: boolean = false;
  freshProduct: product = {
    productName: '',
    productCost: 0
  }
  productsList: product[] = [
    {
      productName: 'sony',
      productCost: 500
    },
    {
      productName: 'sony',
      productCost: 500
    },
    {
      productName: 'sony',
      productCost: 500
    }
  ];

  constructor(private communicate: SharedService) { }

  ngOnInit() {
    this.communicate.caseNumber$.subscribe(data => {
      console.log("value received from register component is: "+ data);
      this.name = data;
    })
  }

  addProduct() {

    console.log("added product is: "+ this.freshProduct);
    this.productsList.push(this.freshProduct);
    console.log(this.productsList);
  }

  openModal() {
    this.communicate.publishData('js');
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }

}
