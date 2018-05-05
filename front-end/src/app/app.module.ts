import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GroupService} from './group.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MoraCupResultComponent } from './mora-cup-result/mora-cup-result.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { TablesComponent } from './tables/tables.component';
import { AdminMatchesComponent } from './admin-matches/admin-matches.component';
import { MatchService } from './match.service';


@NgModule({
  declarations: [
    AppComponent,
    MoraCupResultComponent,
    AdminComponent,
    TablesComponent,
    AdminMatchesComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GroupService,
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
