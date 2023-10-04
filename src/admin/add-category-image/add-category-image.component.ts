import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CategoryImageService } from '../service/category-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category-image',
  templateUrl: './add-category-image.component.html',
  styleUrls: ['./add-category-image.component.scss']
})
export class AddCategoryImageComponent {

  addCategory!:FormGroup;

  constructor(private categoryImageService:CategoryImageService, private router:Router){}

  ngOnInit(){
    this.addCategoryForm();
  }

  addCategoryForm(){
    this.addCategory = new FormGroup({
      categoryName:new FormControl('',Validators.required),
      categoryImage: new FormControl('',Validators.required)
    })
  }

  addData(data:any){   
  this.categoryImageService.postCategoryImage(data).subscribe((res)=>{
        this.router.navigate(['/admin/show-data'])
  })
    
  }


}
