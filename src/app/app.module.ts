import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UrlSerializer } from '@angular/router';

import { LowerCaseUrlSerializer } from '@shared/serializer/LowerCaseUrlSerializer';
import { HeaderComponent } from '@core/header/header.component';
import { SideMenuComponent } from '@core/side-menu/side-menu.component';

import { HomeModule } from '@modules/home/home.module';
import { BranchRequestModule } from '@modules/branch-request/branch-request.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    CoreModule,
    SharedModule,
    ShellModule,
    AuthModule,
    BrowserAnimationsModule,
    HomeModule,
    BranchRequestModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, HeaderComponent, SideMenuComponent],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
