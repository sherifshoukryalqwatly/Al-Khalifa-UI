import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Home } from "../../../features/home/home";

@Component({
  selector: 'app-main',
  imports: [Navbar, Home],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
