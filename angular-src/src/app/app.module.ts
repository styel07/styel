import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// Skills Components
import { SkillsEditComponent } from './components/skills/skills-edit/skills-edit.component';
import { SkillsListComponent } from './components/skills/skills-list/skills-list.component';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { SkillService } from './services/skill.service';

// Flash Messages
import { FlashMessagesModule } from 'angular2-flash-messages';

//Auth Guard
import { AuthGuard } from './guards/auth.guard';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SkillsEditComponent,
    SkillsListComponent,
    ProjectListComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  // all services should be in providers
  providers: [ValidateService, AuthService, AuthGuard, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
