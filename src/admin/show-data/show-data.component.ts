import { Component } from '@angular/core';
import { AllProductDataaService } from '../service/all-product-dataa.service';
import { Router } from '@angular/router';
import { CategoryImageService } from '../service/category-image.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent {

  allProducts:any=[];
  itemId: any;
  categoryImageData:any=[];
  constructor(private allProduct:AllProductDataaService,private router:Router, private categoryImageService:CategoryImageService){

  }

  ngOnInit(){
    window.scrollTo(0, 0);
    this.getAllProduct();
    this.getCategoryImageData();
  }

  getAllProduct(){
    this.allProduct.getData().subscribe((res)=>{
      this.allProducts=res;
    })
  }
  deleteData(id:any){
    this.allProduct.deleteData(id).subscribe((res)=>{
      alert("data deleted")
    this.getAllProduct();
    })
  }

  getCategoryImageData(){
    this.categoryImageService.getCategoryImageData().subscribe((res)=>{
      this.categoryImageData=res;
    })
  }

  deleteCtegoryImageData(id:any){
    this.categoryImageService.deleteCategoryImageData(id).subscribe((res)=>{
      this.getCategoryImageData();
    })

  }


}
