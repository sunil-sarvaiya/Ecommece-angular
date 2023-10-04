import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart/service/cart.service';


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

  ngOnInit() {
    this.forProductDetails();
    // this.getData();
    this.getProductData();
    window.scrollTo(0, 0);

  }

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private cartt: CartService
  ) {

  }

  forProductDetails() {
    this.productIdd = this.route.snapshot.params['id'];
  }

  // getData(){
  //   this.service.getProductDetails().subscribe((res)=>{
  //     // this.productData=res;
  //   console.log("all product-data",res);
  //     })
  // }


  getProductData() {
    this.service.getProductDetailsById(this.productIdd).pipe(toArray()).subscribe((res) => {
      // console.log("product-data",this.productData);
      this.categoryList = res;

    })
    
  }


  addDataToCart(data:any) {
    this.cartt.postCartData(data).subscribe((res) => {
      this.router.navigate(['/cart/cartData'])
      this.toastr.success("added successfully!!")
    },
    (error)=>{
      this.toastr.error("already item in cart !!")
    })
    

    
  }


  // addToCart() {
  //   this.service.getProductDetailsById(this.productIdd).subscribe((res) => {      
  //     this.cart = res;
  //     console.log("khabar nay ",this.cart);
  //   this.myCartData = this.cart;
  //   console.log("for local",this.myCartData);
  //   localStorage.setItem("myCartData", JSON.stringify(this.myCartData));
  //   this.toastr.success("data added in cart successfully!!");
  //   this.router.navigate(['/cart/cartData']);
  //   })
  // }


}
