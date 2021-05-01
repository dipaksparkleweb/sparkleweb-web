import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ServicesComponent } from './component/services/services.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './component/portfolio-detail/portfolio-detail.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { CareersComponent } from './component/careers/careers.component';
import { CareersFormComponent } from './component/careers-form/careers-form.component';
import { ContactusComponent } from './component/contactus/contactus.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    BlogComponent,
    BlogDetailComponent,
    CareersComponent,
    CareersFormComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
