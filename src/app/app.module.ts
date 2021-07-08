import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { customerReducer } from './pages/store/reducer/customer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ collection: customerReducer }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
