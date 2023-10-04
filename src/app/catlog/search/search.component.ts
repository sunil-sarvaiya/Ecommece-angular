import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/layout.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchResult:any=[];

  constructor(private route:ActivatedRoute,private layout:LayoutService){

  }

  ngOnInit(){
    let query=this.route.snapshot.paramMap.get('query');

    query && this.layout.searchProduct(query).subscribe((res)=>{
      this.searchResult=res;
    })
    
  }
}
