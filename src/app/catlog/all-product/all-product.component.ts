import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {

  allProducts: any = [];
  selectedOption: any;
  object: any;
  productId:any;


  constructor(private categoryService: CategoryService, private route:ActivatedRoute) { }

  ngOnInit(){

    this.categoryService.getProductDetails().subscribe((res)=>{
      this.object=res;
        this.allProducts = this.object;
        
    window.scrollTo(0, 0);

    

      

    })
 

    
  }

  getData() {
    this.categoryService.getProductDetails().subscribe((res) => {
      console.log(res);
      
      this.object = res;
    if (this.selectedOption) {
        this.allProducts = this.object.filter((item: { cat: any; }) => item.cat === this.selectedOption);
      }

    })
  }

}
