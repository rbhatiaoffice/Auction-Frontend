import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Auction {
  title: string;
  image: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule, // Add CommonModule here
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  upcomingAuctions: Auction[] = [
    {
      title: 'Vintage Car Auction',
      image: 'assets/images/vintage_cars.jpg',
    },
    {
      title: 'Antique Furniture Auction',
      image: 'assets/images/antique-furniture.jpg',
    },
    {
      title: 'Rare Art Auction',
      image: 'assets/images/rare-art.jpg',
    },
    {
      title: 'Luxury Watch Auction',
      image: 'assets/images/luxury-watch.jpg',
    },
    {
      title: 'Collectible Coins Auction',
      image: 'assets/images/collectible-coins.jpg',
    },
  ];
}
