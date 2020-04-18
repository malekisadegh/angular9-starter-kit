import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';

import { MaterialModule } from '../@shared/material/material.module';

@NgModule({
  imports: [CommonModule, TranslateModule, AuthModule, I18nModule, RouterModule, MaterialModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
