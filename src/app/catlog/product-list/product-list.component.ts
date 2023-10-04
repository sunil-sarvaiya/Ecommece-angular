import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  categoryList:any=[]
  productId:any;

  constructor(private service:CategoryService,private category:CategoryService,private route:ActivatedRoute){

  }
  ngOnInit(){
    this.forProductDetails();
    this.getData();
    window.scrollTo(0, 0);




  }

  forProductDetails(){

    this.productId=this.route.snapshot.params['id'];

    // console.log("product id from category",this.productId);


  }
  // getData(){
  //   this.service.getProductDetails().subscribe((res)=>{
  //   this.productData=res;
  //   console.log("product-data",this.productData);
  //  })
 
  // }


  getData(){
    this.category.getCategoryDataById(this.productId).pipe(toArray()).subscribe((res)=>{
      // console.log("getCategoryDataById",res);
   this.categoryList=res;
      
      
    })

  }

}
