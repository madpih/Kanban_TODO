import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const routes: Routes = [{path: '', component: MainViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), DragDropModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
