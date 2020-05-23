import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
  productId: string ;

  constructor(private route: ActivatedRoute, private router: Router){
    this.productId = route.snapshot.paramMap.get('id');
  }

  goBack(){
    this.router.navigate(['/products']);
  }

}
