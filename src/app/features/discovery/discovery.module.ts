import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoveryRoutingModule } from './discovery-routing.module';
import { DiscoveryPageComponent } from './pages/discovery-page/discovery-page.component';
import { MoodSelectorComponent } from './components/mood-selector/mood-selector.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackCardComponent } from './components/track-card/track-card.component';


@NgModule({
  declarations: [
    DiscoveryPageComponent,
    MoodSelectorComponent,
    TrackListComponent,
    TrackCardComponent
  ],
  imports: [
    CommonModule,
    DiscoveryRoutingModule
  ]
})
export class DiscoveryModule { }
