import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductListComponent } from './products/products.list.component';
import { ProductCreateComponent } from './products/product.create.component'; 
import { ProductEditComponent } from './products/product.edit.component';
import { ProductSortPipe } from './products/product.pipe';
import { BananasPipe } from './products/bananas.pipe';
import { ProductContainerComponent } from './products/product.container.component';

import { PageNotFoundComponent } from './page.not.found.component';
import { HomeComponent } from './home.component';
//routing
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './products/product.detail.component';

import { ProductService } from './products/product.service';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './admin/auth.guard';
import { HeroComponent } from './hero/hero.component';

//defining routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductContainerComponent },
  { path : 'admin', component: AdminComponent, canActivate : [AuthGuard] },
  { path : 'hero', component: HeroComponent },
  { path: '**', component: PageNotFoundComponent }
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductSortPipe,
    BananasPipe,
    ProductContainerComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // setup route
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ProductService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
