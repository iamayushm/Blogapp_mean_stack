import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './post/list/list.component';
import {SingleListComponent} from './post/single-list/single-list.component'

const routes: Routes = [

  // { path: '' , component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
