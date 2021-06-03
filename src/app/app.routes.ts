import { Routes } from "@angular/router";
import { creditsModelComponent } from './models/credits';
import { CreditComponent } from './components/credit/credit.component';

export const ROUTES:Routes=[
    {path:'credits',component:CreditComponent},
    { path:'',pathMatch:'full',redirectTo:'credits' },
    { path:'**',pathMatch:'full',redirectTo:'credits'}
]