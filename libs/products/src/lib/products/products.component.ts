import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from '@angular-monorepo/orders';

@Component({
  selector: 'lib-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent { }
