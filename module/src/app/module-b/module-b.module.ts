import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';
import { PageBComponent } from './page-b.component';

@NgModule({
  declarations: [PageBComponent],
  exports: [PageBComponent],
  imports: [CommonModule, ShareModuleModule],
})
export class ModuleBModule {}
