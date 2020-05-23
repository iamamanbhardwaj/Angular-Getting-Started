import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

import { YesNoPipe } from 'src/pipes/YesNoPipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarComponent, YesNoPipe],
  exports: [
    StarComponent, CommonModule, FormsModule, YesNoPipe
  ]
})
export class SharedModule { }
