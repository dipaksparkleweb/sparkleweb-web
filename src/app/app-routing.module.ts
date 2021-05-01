import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloglistComponent } from './blog/blogpost/bloglist/bloglist.component';
import { BlogpostComponent } from './blog/blogpost/blogpost.component';
import { CategoryaddComponent } from './blog/category/categoryadd/categoryadd.component';
import { CategorylistComponent } from './blog/category/categorylist/categorylist.component';
import { TagaddComponent } from './blog/tag/tagadd/tagadd.component';
import { TaglistComponent } from './blog/tag/taglist/taglist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const ClientModule = () => import('./client/client.module').then(x => x.ClientModule);

const routes: Routes = [
    { path: '', loadChildren: ClientModule },
    { path: 'admin/home', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: accountModule },
    { path: 'admin/changepassword', component:ChangepasswordComponent, canActivate: [AuthGuard] },
    { path: 'admin/blogpost', component:BlogpostComponent, canActivate: [AuthGuard] },
    { path: 'admin/bloglist', component:BloglistComponent, canActivate: [AuthGuard] },
    { path: 'admin/categorylist', component:CategorylistComponent, canActivate: [AuthGuard] },
    { path: 'admin/categoryadd', component:CategoryaddComponent, canActivate: [AuthGuard] },
    { path: 'admin/taglist', component:TaglistComponent, canActivate: [AuthGuard] },
    { path: 'admin/tagadd', component:TagaddComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }