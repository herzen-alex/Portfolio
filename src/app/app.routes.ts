import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { ProjectDetails } from './shared/project-details/project-details';
import { PrivacyPolicy } from './shared/privacy-policy/privacy-policy';
import { LegalNotice } from './shared/legal-notice/legal-notice';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: Portfolio},
    {path: 'project_details/:id', component: ProjectDetails},
    {path: 'privacy-policy', component: PrivacyPolicy},
    {path: 'legal-notice', component: LegalNotice},
];



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // восстанавливает позицию при навигации
  anchorScrolling: 'enabled',           // включаем автоматический scroll на #fragment
  scrollOffset: [0, 0],                 // при необходимости сдвиг
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}