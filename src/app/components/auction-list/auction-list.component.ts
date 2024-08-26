import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

export interface Auction {
  id: number;
  auctionName: string;
  auctioneer: string;
  date: string;
}

@Component({
  selector: 'app-auction-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule
  ],
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent {
  displayedColumns: string[] = ['no', 'auctionName', 'auctioneer', 'date', 'action'];
  dataSource: Auction[] = [];
  pageSize = 10;
  currentPage = 0;
  totalSize = 0;

  constructor(private snackBar: MatSnackBar) {
    this.loadDummyData();
  }

  loadDummyData(): void {
    const dummyData: Auction[] = [
      { id: 1, auctionName: 'Auction 1', auctioneer: 'Auctioneer 1', date: '2024-01-01' },
      { id: 2, auctionName: 'Auction 2', auctioneer: 'Auctioneer 2', date: '2024-02-01' },
      // Add more dummy data as needed
    ];
    this.dataSource = dummyData;
    this.totalSize = dummyData.length;
  }

  handlePage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  deleteAuction(id: number): void {
    this.dataSource = this.dataSource.filter(auction => auction.id !== id);
    this.snackBar.open('Auction deleted successfully!', 'Close', {
      duration: 2000,
    });
  }

  addAuction(): void {
    this.snackBar.open('Add Auction clicked!', 'Close', {
      duration: 2000,
    });
  }
}
