import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() image!: string 
  @Input() desc!: string 
  @Input() price!: string
  @Input() rate!: number
}
