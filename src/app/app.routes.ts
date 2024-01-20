// import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// // import { LoginComponent } from './pages/login/login.component';

// export const routes: Routes = [
//    {path: '' , component: HomeComponent},
// //    {path: '/login' , component: LoginComponent},
// ];

import { Routes } from '@angular/router';
import { ProductsComponent } from './page/admin/products/products.component';
import { CreateComponent } from './page/admin/create/create.component';
import { EditComponent } from './page/admin/edit/edit.component';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './layouts/admin/admin.component';


export const routes: Routes = [
  // route '/' = page Home
  // path, component
  { path: '', component: HomeComponent },
  // { path: 'admin', component: ProductsComponent },
  // {
  //   path:'login'
  // },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: CreateComponent },
      { path: 'products/edit/:id', component: EditComponent },
    ],
  },
];
