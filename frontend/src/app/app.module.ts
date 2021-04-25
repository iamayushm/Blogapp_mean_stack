import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" 
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './post/add/add.component';
import { ListComponent } from './post/list/list.component';
import { SingleListComponent } from './post/single-list/single-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './post/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    SingleListComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent },
      { path: 'single/:id', component: SingleListComponent },
      { path:'add', component:AddComponent},
      { path:'update/:id', component:UpdateComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
