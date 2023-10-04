import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CategoryImageService } from 'src/admin/service/category-image.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoryData: any = [];
  allData: any = [];
  allData2: any = [];

  finalData: any;
  object: any;
  selectedOption: any;
  allProducts: any;
  uniqueArray: any = [];
  uniqueArray2: any = [];
  ImageData:any;
  categoryName:any;
  FruitsCategory:any;
  VegetablesCategory:any;
  ClothsCategory:any;
  ElectronicsCategory:any;
  DigitalCategory:any;
  SportsCategory:any;

  constructor(private service: CategoryService , private categoryImageService:CategoryImageService) {}

  ngOnInit() {
    this.getCategoryData();
    this.getData();
    this.getCategoryImage();
    window.scrollTo(0, 0);
  }

  getCategoryData() {
    this.service.getCategoryData().subscribe((res) => {
      this.categoryData = res;
    });
  }

  getData() {
    this.service.getProductDetails().subscribe((res) => {
      this.object = res;  
          
      this.object.filter((item: any) => {
        item.cat;
        let x = item.cat;
        this.allData.push(x);
        this.uniqueArray = this.allData.filter(
          (value: any, index: any, array: any) => array.indexOf(value) === index
        );
        
      });
    });
  }

  getCategoryImage(){
    this.categoryImageService.getCategoryImageData().subscribe((res)=>{
      this.ImageData=res;

            
      for (const item of this.ImageData) {
         this.categoryName = item.categoryName;
         
         if(this.categoryName==='Fruits'){

        this.FruitsCategory=item.categoryImage;
          
          
          
          
        }
      }
      
 
   
  })
}
}


