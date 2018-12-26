import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleHeaderComponent } from './components/module-header/module-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ModuleHeaderComponent],
  declarations: [ModuleHeaderComponent]
})
export class SharedModule { }
