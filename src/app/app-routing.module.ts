import { AllWorkoutPlansComponent } from './components/views/plans/all-plans/all-workout-plans/all-workout-plans.component';
import { WorkoutPlanComponent } from './components/views/plans/today-plans/workout-plan/workout-plan.component';
import { SupplementPlanComponent } from './components/views/plans/today-plans/supplement-plan/supplement-plan.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayPlansComponent } from './components/views/plans/today-plans/today-plans.component';
import { DietPlanComponent } from './components/views/plans/today-plans/diet-plan/diet-plan.component';
import { AllPlansComponent } from './components/views/plans/all-plans/all-plans.component';


const routes: Routes = [
  { path: 'todayPlans', component: TodayPlansComponent },
  { path: 'todayPlans/diet-plan', component: DietPlanComponent },
  { path: 'todayPlans/supplement-plan', component: SupplementPlanComponent },
  { path: 'todayPlans/workout-plan', component: WorkoutPlanComponent },
  { path: 'allPlans', component: AllPlansComponent },
  { path: 'allPlans/workout-plans', component: AllWorkoutPlansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
