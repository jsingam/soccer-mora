
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './admin/admin.component';
import {TablesComponent} from './tables/tables.component';
import {AdminMatchesComponent} from './admin-matches/admin-matches.component';


const routes: Routes = [
  {path: 'admin-soccer-mora-mora-cup', component: AdminComponent},
  {path: '', component: TablesComponent},
  {path: 'admin-soccer-mora-mora-cup/matches', component: AdminMatchesComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
