import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BranchRequestRoutingModule } from './branch-request-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BranchRequestComponent } from './components/branch-request/branch-request.component';
import { SharedModule } from '@shared/shared.module';
import { InsertRequestComponent } from './components/insert-request/insert-request.component';

@NgModule({
  declarations: [BranchRequestComponent, InsertRequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    BranchRequestRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class BranchRequestModule {}
