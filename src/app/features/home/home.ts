import { Component } from '@angular/core';
import { ProductCard } from "../../shared/components/product-card/product-card";
import { Footer } from "../../shared/components/footer/footer";
import { SpecialCard } from '../../shared/components/special-card/special-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductCard,SpecialCard, Footer,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  recommended = [
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bfb289e7f.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bcf39b16d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bd4c3814d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913be87cea6d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913be87cea6d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bcf39b16d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bcf39b16d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
  ]
  top = [
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bfb289e7f.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bcf39b16d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bd4c3814d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
    {
      img:"https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bd4c3814d.webp",
      desc:"Track Top Liverpool The Green",
      price:"375.00",
      rate: 0
    },
  ]
  only = [
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-08-17-68a2193fa8fc8.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-08-11-6899e27fb44d5.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-10-08-68e6a65c19878.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-08-05-6891e16ca7b4c.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-07-31-688b58197e403.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-09-6911004a1c6b0.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-08-06-68934a153fc37.webp",
      price: "370.00"
    },
    {
      img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-09-21-68d0615bdbad9.webp",
      price: "370.00"
    },
  ]
  club  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-07-29-6888cb9ce8f6c.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  original  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  sports  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  sportsbags  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  tracktop  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  football  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  Perfume  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  sleepers  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  sportswear  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
  sneakers  = [
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},
  { img: "https://africastoreas.com/storage/app/public/product/thumbnail/2025-11-12-6913bb329a354.webp",desc : "Zamalek's imaginary black T-shirt",price:"400.00"},  
];
}
