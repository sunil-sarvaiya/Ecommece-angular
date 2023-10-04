import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent {

  constructor(private route:ActivatedRoute,private categoryService:CategoryService){

  }

  category:any;
  object:any;
  allProducts:any=[];

  ngOnInit(){
    this.category=this.route.snapshot.paramMap.get('item');
    console.log('category:',this.category);

    this.getData();
  }

  getData() {
    this.categoryService.getProductDetails().subscribe((res) => {
      this.object = res;
    if (this.category) {
        this.allProducts = this.object.filter((item: { cat: any; }) => item.cat === this.category);
        console.log(this.allProducts,"sunil");
        
      }

    })
  }

}
