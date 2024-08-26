import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import { AuctionDetailsComponent } from './components/auction-details/auction-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { CreateAuctionComponent } from './components/create-auction/create-auction.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'auctions', component: AuctionListComponent },
  { path: 'auction-details', component: AuctionDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-auction', component: CreateAuctionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HttpClient],
})
export class AppRoutingModule {}
