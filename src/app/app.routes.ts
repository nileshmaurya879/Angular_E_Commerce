import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { SellerAuthComponent } from './Component/seller-auth/seller-auth.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'seller-auth',
        component: SellerAuthComponent
    }
];
