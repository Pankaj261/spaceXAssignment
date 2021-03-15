import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXChildComponent } from './space-xchild/space-xchild.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { LaunchCompComponent } from './launch-comp/launch-comp.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LaunchServiceService } from './services/launch-service.service';
import { InterceptorService } from './services/interceptor.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXChildComponent,
    SideFilterComponent,
    LaunchCompComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    LaunchServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
