import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { SellerAuthComponent } from './Component/seller-auth/seller-auth.component';
import { sellerAuthGuard } from './seller-auth.guard';

export const routes: Routes = [
    {
        path: 'seller-home',
        component: HomeComponent,
        canActivate:[sellerAuthGuard]
    },
    {
        path: 'seller-auth',
        component: SellerAuthComponent
    },
    {
        path: 'seller-auth',
        component: SellerAuthComponent
    }
];
