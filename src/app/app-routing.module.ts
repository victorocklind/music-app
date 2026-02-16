import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'discovery',
    loadChildren: () =>
      import('./features/discovery/discovery.module')
        .then(m => m.DiscoveryModule)
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./features/playlist/playlist.module')
        .then(m => m.PlaylistModule)
  },
  {
    path: '',
    redirectTo: 'discovery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
