import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { ProjectDetails } from './shared/project-details/project-details';
import { PrivacyPolicy } from './shared/privacy-policy/privacy-policy';
import { LegalNotice } from './shared/legal-notice/legal-notice';

export const routes: Routes = [
    {path: '', component: Portfolio},
    {path: 'project_details/:id', component: ProjectDetails},
    {path: 'privacy-policy', component: PrivacyPolicy},
    {path: 'legal-notice', component: LegalNotice},
];
