import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskComponent } from './task/task.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PerBasketComponent } from './shop/per-basket/per-basket.component';
import { PerProductComponent } from './shop/per-product/per-product.component';
import { ShopComponent } from './shop/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'chess',
    component: ChessComponent
  },
  {
    path: 'task-manager',
    component: TaskComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'shop',
    loadChildren: './shop/shop.module#ShopModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
