import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart/service/cart.service';
import { CloudinaryService } from 'src/app/globle-service/cloudinary.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productIdd: any;
  categoryList: any = [];
  cart: any;
  myCartData: any;
  _allData: any;

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private cartt: CartService,
    private cloudinaryService: CloudinaryService
  ) {

  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.cloudinaryService.getAllData().subscribe((res) => {
      this._allData = res
      this.forProductDetails();
      this.getProductData();
    })
  }
  forProductDetails() {
    this.productIdd = this.route.snapshot.params['id'];
    console.log(this.productIdd);
    console.log(this._allData.productLists[this.productIdd-1]);

  }
  getProductData() {
      this.categoryList = this._allData.productLists[this.productIdd-1];
  }
  addDataToCart(data: any) {
    this.cartt.postCartData(data).subscribe((res) => {
      this.router.navigate(['/cart/cartData'])
      this.toastr.success("added successfully!!")
    },
      (error) => {
        this.toastr.error("already item in cart !!")
      })
  }
}
