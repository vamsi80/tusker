import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { PhysicalSpaceComponent } from './physical-space/physical-space.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CursorComponent } from './animations/cursor/cursor.component';
import { ExperienceComponent } from './experience/experience.component';
import { ParticalsComponent } from './particals/particals.component';
import { GifTextComponent } from './animations/gif-text/gif-text.component';
import { TextComponent } from './about/text/text.component';
import { ProjectpopupComponent } from './projectpopup/projectpopup.component';
import { ClientLogoComponent } from './clients/client-logo/client-logo.component';
import { HeaderComponent } from './layout/header/header.component';
import { DisableRightClickDirective } from './directives/rightclick/disable-right-click.directive';
import { BackToTopButtonComponent } from './animations/back-to-top-button/back-to-top-button.component';
import { WorkourComponent } from './works/workour/workour.component';
import { Capabilities1Component } from './Capabilities/capabilities1/capabilities1.component';
import { ServicesHomeComponent } from './services/services-home/services-home.component';
import { CircleAnimationComponent } from './animations/circle-animation/circle-animation.component';
import { LogoLoaderComponent } from './shared/logo-loader/logo-loader.component';
import { HeaderaboutComponent } from './about/headerabout/headerabout.component';
import { StickyComponent } from './services/sticky/sticky.component';
import { ButtoComponent } from './butto/butto.component';
import { HomeclintComponent } from './clients/homeclint/homeclint.component';
import { ScrollAnimateDirective } from './directives/scroll-anim/scroll-animate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurworkComponent,
    ContactusComponent,
    PhysicalSpaceComponent,
    FooterComponent,
    CursorComponent,
    ExperienceComponent,
    CircleAnimationComponent,
    ParticalsComponent,
    GifTextComponent,
    TextComponent,
    ProjectpopupComponent,
    ClientLogoComponent,
    HeaderComponent,
    DisableRightClickDirective,
    BackToTopButtonComponent,
    WorkourComponent,
    Capabilities1Component,
    ServicesHomeComponent,
    LogoLoaderComponent,
    HeaderaboutComponent,
    StickyComponent,
    ButtoComponent,
    HomeclintComponent,
    ScrollAnimateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
