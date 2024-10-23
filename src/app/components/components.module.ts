import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CarrosselHomeComponent } from './carrossel-home/carrossel-home.component';
import { NgbAlertModule, NgbCarouselModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { OxigenComponent } from './oxigen/oxigen.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { TemperatureBarComponent } from './temperature-bar/temperature-bar.component';
import { OxygenBarComponent } from './oxygen-bar/oxygen-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CarrosselHomeComponent,
    OxigenComponent,
    TemperatureComponent,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    TemperatureBarComponent,
    OxygenBarComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbPaginationModule,
    NgbAlertModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [
    NavbarComponent,
    CarrosselHomeComponent,
    OxigenComponent,
    TemperatureComponent,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    TemperatureBarComponent,
    OxygenBarComponent,
  ]
})
export class ComponentsModule { }
