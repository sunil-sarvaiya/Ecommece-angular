import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CategoryImageService } from 'src/admin/service/category-image.service';
import { CloudinaryService } from 'src/app/globle-service/cloudinary.service';

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
  _allData:any;

  constructor(private service: CategoryService , private categoryImageService:CategoryImageService,private cloudinary:CloudinaryService) {}

  ngOnInit() {
  
    window.scrollTo(0, 0);
    this.cloudinary.getAllData().subscribe((res)=>{
      this._allData=res;
      
      this.categoryData = this._allData.categoryList;

      this.object = this._allData?.productLists;  
      
      
          
      this.object.filter((item: any) => {
        item.cat;
        let x = item.cat;
        this.allData.push(x);
        this.uniqueArray = this.allData.filter(
          (value: any, index: any, array: any) => array.indexOf(value) === index
        );
        
      });

      
      

    })
    this.getCategoryImage();
  }

  getCategoryImage(){
      this.ImageData=this._allData.forImage;
      
      

            
      for (const item of this.ImageData) {
         this.categoryName = item.categoryName;
         
         if(this.categoryName==='Fruits'){

        this.FruitsCategory=item.categoryImage;
          
          
          
          
        }
      }
      
 
   
  
}
}


