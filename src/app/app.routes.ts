import { Routes } from '@angular/router';
import { WelcomePage } from './Page/welcome-page/welcome-page';
import { DashboardPage } from './Page/dashboard-page/dashboard-page';
import { ProductsPage } from './Page/products-page/products-page';
import { RegisterPage } from './Page/register-page/register-page';
import { LoginPage } from './Page/login-page/login-page';
import { CartPage } from './Page/cart-page/cart-page';
import { loggedOut , loggedIn } from './guards/auth-guard';
import { admin } from './guards/admin-guard';





export const routes: Routes = [
    
    { path: '', component: WelcomePage,title: 'Welcome', },
    { path: 'Welcome', component: WelcomePage,title: 'Welcome' , },
    { path: 'Dashboard', component: DashboardPage,title: 'Dashboard' ,canActivate: [admin] },
    { path: 'Cart', component: CartPage,title: 'Cart' ,canActivate: [loggedIn] },
    { path: 'products', component: ProductsPage,title: 'Products' ,canActivate: [loggedIn] },
    { path: 'register', component: RegisterPage,title: 'Register',canActivate: [loggedOut] },
    { path: 'login', component: LoginPage,title: 'Login' ,canActivate: [loggedOut]},


];
