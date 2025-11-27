import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-card',
  imports: [],
  templateUrl: './special-card.html',
  styleUrl: './special-card.css',
})
export class SpecialCard {
  @Input() image!: string 
  @Input() desc!: string 
  @Input() price!: string
}
