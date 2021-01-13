import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSidebarComponent } from './components/layout/main-sidebar/main-sidebar.component';
import { SmallSidebarComponent } from './components/layout/small-sidebar/small-sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { TodayPlansComponent } from './components/views/plans/today-plans/today-plans.component';
import { DietPlanComponent } from './components/views/plans/today-plans/diet-plan/diet-plan.component';
import { PlansNavigationComponent } from './components/layout/plans-navigation/plans-navigation.component';
import { DaysNavigationComponent } from './components/partials/days-navigation/days-navigation.component';
import { SupplementPlanComponent } from './components/views/plans/today-plans/supplement-plan/supplement-plan.component';
import { MealsNavigationComponent } from './components/partials/meals-navigation/meals-navigation.component';
import { AllPlansComponent } from './components/views/plans/all-plans/all-plans.component';
import { WorkoutPlanComponent } from './components/views/plans/today-plans/workout-plan/workout-plan.component';
import { AllWorkoutPlansComponent } from './components/views/plans/all-plans/all-workout-plans/all-workout-plans.component';
import { SecondSidebarComponentComponent } from './components/layout/second-sidebar-component/second-sidebar-component.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainSidebarComponent,
    SmallSidebarComponent,
    NavbarComponent,
    TodayPlansComponent,
    DietPlanComponent,
    PlansNavigationComponent,
    DaysNavigationComponent,
    SupplementPlanComponent,
    MealsNavigationComponent,
    AllPlansComponent,
    WorkoutPlanComponent,
    AllWorkoutPlansComponent,
    SecondSidebarComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    {
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
