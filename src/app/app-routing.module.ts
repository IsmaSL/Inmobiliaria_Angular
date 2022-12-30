import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { HomeComponent } from './home/home.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    { path: '', component: HomeComponent },
                    { path: 'notfound', component: AppNotfoundComponent},
                    { path: 'details', component:  DetailComponent}
                ]
            },
            { path: '**', redirectTo: '/notfound' },
            
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
