import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoaderComponent } from './loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WidgetPanelComponent } from '@shared/templates/widget-panel/widget-panel.component';

@NgModule({
  imports: [CommonModule, MaterialModule, TranslateModule.forRoot({ defaultLanguage: 'fa' }), FlexLayoutModule],
  declarations: [LoaderComponent, WidgetPanelComponent],
  exports: [LoaderComponent, TranslateModule, FlexLayoutModule, MaterialModule, WidgetPanelComponent],
})
export class SharedModule {}
