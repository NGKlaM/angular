import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Homeppage';
  menuList = [
    {
      label: 'Home',
      link: '',
    },
    {
      label: 'Admin',
      link: 'admin',
    },
    {
      label: 'Products',
      link: 'admin/products',
    },
    {
      label: 'Contact',
      link: '/',
    },
  ]; // NgFor
}
