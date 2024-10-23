import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsystemRoutingModule } from './newsystem-routing.module';
import { NewsystemComponent } from './newsystem.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@NgModule({
  declarations: [
    NewsystemComponent
  ],
  imports: [
    CommonModule,
    NewsystemRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class NewsystemModule { }
