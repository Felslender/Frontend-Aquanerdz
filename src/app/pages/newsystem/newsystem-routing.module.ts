import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsystemComponent } from './newsystem.component';

const routes: Routes = [{ path: '', component: NewsystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsystemRoutingModule { }
