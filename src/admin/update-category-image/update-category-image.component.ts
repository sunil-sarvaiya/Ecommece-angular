import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryImageService } from '../service/category-image.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category-image',
  templateUrl: './update-category-image.component.html',
  styleUrls: ['./update-category-image.component.scss']
})
export class UpdateCategoryImageComponent {

  constructor(private route:ActivatedRoute , private categoryImageService:CategoryImageService , private router:Router){
  }

  categoryId:any;
  addCategory!:FormGroup;
  forSetData:any=[];


  ngOnInit(){
    this.addCategoryForm();
    this.getCategoryImageDataById();
  }



  addCategoryForm(){
    this.addCategory = new FormGroup({
      categoryName:new FormControl('',Validators.required),
      categoryImage: new FormControl('',Validators.required)
    })
  }



  getCategoryImageDataById(){
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryImageService.getCategoryImageById(this.categoryId).subscribe((res)=>{
      this.forSetData=res;

      this.addCategory.setValue({
        categoryName : this.forSetData.categoryName || "",
        categoryImage : this.forSetData.categoryImage || ""
      })
    })
  }


  updateData(data:any){   
    this.categoryImageService.updateCategoryImageData(this.categoryId,data).subscribe((res)=>{
          this.router.navigate(['/admin/show-data'])
    }) 
    }



}
