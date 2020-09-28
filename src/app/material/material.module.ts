import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
