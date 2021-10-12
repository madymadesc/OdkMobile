import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  items: any;
  constructor(private s: ServiceService) {
    // this.items = this.s.getList()
  }
  
  ngOnInit() {
    // this.items = this.s.getList()
    // console.log(this.items);
    this.listapp();
  }
listapp(){
  this.s.listApprenant().subscribe((data:any) => this.items=data);
}
}
