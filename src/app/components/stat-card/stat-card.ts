import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCard {

  @Input() label:number=0;
  @Input() value=0;
  @Input() vounteers=0;

}
