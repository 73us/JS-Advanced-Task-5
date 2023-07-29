import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorksCenzorComponent } from './pages/works-cenzor/works-cenzor.component';
import { WorksTasklistComponent } from './pages/works-tasklist/works-tasklist.component';
import { WorksUserlistComponent } from './pages/works-userlist/works-userlist.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './pages/works-tasklist/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    WorksCenzorComponent,
    WorksTasklistComponent,
    WorksUserlistComponent,
    HeaderComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
