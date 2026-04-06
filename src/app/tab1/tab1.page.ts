import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { SenhasService } from '../services/senhas';

import { IonCard, IonButton, IonInput, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    ExploreContainerComponent, 
    IonCard, IonButton, IonInput, IonCardHeader, IonCardContent,
  ],
})
export class Tab1Page {

  constructor(public senhasService: SenhasService) {}
} 
