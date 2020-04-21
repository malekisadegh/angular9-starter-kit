import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { BranchRequestComponent } from './components/branch-request/branch-request.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'branchrequest', component: BranchRequestComponent, data: { title: extract('branch request') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BranchRequestRoutingModule {}
