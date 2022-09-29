import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../share-module/share-module.module';
import { PageAComponent } from './page-a.component';

@NgModule({
  declarations: [PageAComponent],
  exports: [PageAComponent],
  imports: [CommonModule, ShareModuleModule],
})
export class ModuleAModule {}
