import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DescriptionComponent } from './restaurant/description/description.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'restaurants', component: RestaurantComponent },
    { path: 'description', component: DescriptionComponent },
    { path: 'user', component: UserComponent }
];
