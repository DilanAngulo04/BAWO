import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { ProductService } from './service/product.service';
import { CompanyService } from './service/company.service';
import { ImageService } from './service/image.service';
import { CategoryService } from './service/category.service';
import { HttpClientModule } from '@angular/common/http';
import { TalleresService } from './service/talleres.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTabsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [ProductService, CompanyService, ImageService, CategoryService, TalleresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
