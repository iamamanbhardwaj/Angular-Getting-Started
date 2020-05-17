import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { formatNumber  } from '@angular/common';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

  starWidth: number;
  @Input()
  rating: number;
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
   this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Rating with value ${formatNumber(this.rating, 'en-US', '1.1-1')} was clicked!!`);
  }
}
