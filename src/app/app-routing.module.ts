import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableFilteringExampleComponent } from './table-filtering-example/table-filtering-example.component'
const routes: Routes = [{
    path: 'test',
    component: TableFilteringExampleComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
