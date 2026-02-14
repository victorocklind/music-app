import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';


@NgModule({
  declarations: [
    PlaylistPageComponent,
    PlaylistListComponent,
    PlaylistFormComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
