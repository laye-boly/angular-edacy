import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const MODULES = [MatSliderModule, MatButtonModule, MatMenuModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}
