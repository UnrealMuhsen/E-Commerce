import { Routes } from '@angular/router';
import { WelcomePage } from './Page/welcome-page/welcome-page';
import { DashboardPage } from './Page/dashboard-page/dashboard-page';
import { ProductsPage } from './Page/products-page/products-page';
import { RegisterPage } from './Page/register-page/register-page';
import { LoginPage } from './Page/login-page/login-page';



export const routes: Routes = [
    
    { path: '', component: WelcomePage,title: 'Welcome' },
    { path: 'Welcome', component: WelcomePage,title: 'Welcome' },
    { path: 'Dashboard', component: DashboardPage,title: 'Dashboard' },
    { path: 'products', component: ProductsPage,title: 'Products' },
    { path: 'register', component: RegisterPage,title: 'Register' },
    { path: 'login', component: LoginPage,title: 'Login' },


];
