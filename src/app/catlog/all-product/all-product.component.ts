import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { CloudinaryService } from 'src/app/globle-service/cloudinary.service';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {
  allProducts: any = [];
  selectedOption: any;
  object: any;
  productId: any;
  _allData: any;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute,
    private cloudinary: CloudinaryService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.cloudinary.getAllData().subscribe((res) => {
      this._allData = res;
      this.object = this._allData.productLists;
      this.allProducts = this.object;
    })
  }
  getData() {
    this.object = this._allData.productLists;
    if (this.selectedOption) {
      this.allProducts = this.object.filter((item: { cat: any; }) => item.cat === this.selectedOption);
    }
  }
}
