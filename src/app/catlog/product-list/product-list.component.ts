import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { CloudinaryService } from 'src/app/globle-service/cloudinary.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  categoryList: any = []
  productId: any;
  _allData: any;

  constructor(
    private service: CategoryService,
    private category: CategoryService,
    private route: ActivatedRoute,
    private clodinary: CloudinaryService,
  ) {
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.clodinary.getAllData().subscribe((res) => {
      let data:any = res;
      this._allData=data.categoryList;
      this.forProductDetails();
    // this.getData();
    }) 
  }
  forProductDetails() {
    this.productId = this.route.snapshot.params['id'];
    this.categoryList = this._allData[this.productId-1].productList;    
  }
  // getData() {
  //   this.category.getCategoryDataById(this.productId).pipe(toArray()).subscribe((res) => {
  //     this.categoryList = res;
  //     console.log(res,'res');
  //   })
  // }
}
