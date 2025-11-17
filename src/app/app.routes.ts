import { Routes } from '@angular/router';
import { Main } from './shared/components/main/main';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path:"",component:Main,
            children:[
                {path:"",redirectTo:"/home",pathMatch:"full"},
                {path:"home",component:Home,title:"Home"}
            ]
    }
];
