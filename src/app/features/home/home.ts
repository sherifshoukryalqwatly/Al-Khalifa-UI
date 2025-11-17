import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { ProductCard } from "../../shared/components/product-card/product-card";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [ProductCard, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
