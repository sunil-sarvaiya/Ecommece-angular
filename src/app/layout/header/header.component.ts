import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/service/cart.service';
import { UserService } from 'src/app/user-auth/services/user.service';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  forbutton: any;
  username: any;
  cartData: any = [];
  count: any;
  id: any;
  searchResult: any;
  constructor(
    private router: Router,
    private cart: CartService,
    private userService: UserService,
    private layout: LayoutService
  ) {}

  ngOnInit() {
    this.userService.sub.subscribe((res: any) => {
      this.forbutton = res;
    });
    this.setData();

    if (localStorage.getItem('username')) {
      this.getCartCount();
    } else {
      this.count = 0;
    }
  }

  getCartCount() {
    this.cart.getCartData().subscribe((res) => {
      this.cartData = res;
      if (this.cartData) {
        this.count = this.cartData.length;
      }
    });
  }

  setData() {
    this.username = localStorage.getItem('username');
    this.id = localStorage.getItem('id');
    if (this.username) {
      this.forbutton = true;
    }
  }

  logOut() {
    localStorage.removeItem('username');
    this.forbutton = false;
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      if (element.value.length >= 2) {
        this.layout.searchProduct(element.value).subscribe((res) => {
          this.searchResult = res;
        });
      }
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(val: any) {
    this.router.navigate([`layout/search/${val}`]);
  }

  toNavigate(id: any) {
    this.router.navigate(['catlog/product-details/' + id]);
  }
}
