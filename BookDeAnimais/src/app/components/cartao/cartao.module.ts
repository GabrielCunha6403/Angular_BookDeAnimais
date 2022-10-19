import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';

@NgModule({
  declarations: [CartaoComponent],
  imports: [CommonModule, CartaoModule],
  exports: [CartaoComponent],
})
export class CartaoModule {}
