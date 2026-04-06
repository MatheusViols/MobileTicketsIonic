import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { SenhasService } from '../services/senhas';

import { IonCard, IonCardContent, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    ExploreContainerComponent,
    IonCard, IonCardContent, IonList, IonLabel, IonItem,
  ],
})
export class Tab3Page {
  constructor(public senhasService: SenhasService) {}
}
