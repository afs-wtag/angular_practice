import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './product/edit/edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/add/:id', component: EditComponent },
  { path: 'product/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ProductComponent, EditComponent ]
