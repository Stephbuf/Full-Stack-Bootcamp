import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ComposeEmailPage } from './components/compose-email/compose-email.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, ComposeEmailPage],
})
export class AppComponent {
  constructor() {}
}
