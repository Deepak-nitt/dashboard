import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { StatCard } from './components/stat-card/stat-card';
import { Household } from './components/household/household';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,StatCard,Household],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ngo-dashboard');
}
