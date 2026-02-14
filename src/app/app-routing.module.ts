import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }


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
  { path: '', redirectTo: 'discovery', pathMatch: 'full' }
];
