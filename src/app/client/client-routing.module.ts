import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { BlogComponent } from './component/blog/blog.component';
import { CareersFormComponent } from './component/careers-form/careers-form.component';
import { CareersComponent } from './component/careers/careers.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { HomeComponent } from './component/home/home.component';
import { PortfolioDetailComponent } from './component/portfolio-detail/portfolio-detail.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  {
    path: '', 
    children: [
        { path: '', component: HomeComponent },
        { path: 'aboutus', component: AboutusComponent },
        { path: 'services', component: ServicesComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'portfoliodetail', component: PortfolioDetailComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'blogdetail', component: BlogDetailComponent },
        { path: 'careers', component: CareersComponent },
        { path: 'careersform', component: CareersFormComponent },
        { path: 'contactus', component: ContactusComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
