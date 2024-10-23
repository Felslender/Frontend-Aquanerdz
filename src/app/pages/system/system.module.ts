import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    ComponentsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    ComponentsModule
  ],
  // exports: [
  //   SystemComponent
  // ]
})
export class SystemModule { }
