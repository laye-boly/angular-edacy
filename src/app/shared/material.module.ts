import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [MatSliderModule, MatButtonModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}
