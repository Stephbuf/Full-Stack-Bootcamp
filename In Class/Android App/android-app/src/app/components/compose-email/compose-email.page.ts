import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import {EmailComposer} from 'capacitor-email-composer'; //plug in
import { NativeSettings, AndroidSettings, IOSSettings } from 'capacitor-native-settings';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.page.html',
  styleUrls: ['./compose-email.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,]
  
})
export class ComposeEmailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async sendEmail() {
    await EmailComposer.open({
      to: ['stephaniebtot3@gmail.com'],
      cc: [],
      bcc: [],
      attachments: [],
      subject: 'Hello',
      body: 'This is a test email',
      isHtml: false
    });
  }
  async openNativeSettings() {
    if (Capacitor.getPlatform() === 'android') {
      await NativeSettings.openAndroid({
        option: AndroidSettings.Bluetooth
      });
    }
    else if (Capacitor.getPlatform() === 'ios') {
      await NativeSettings.openIOS({
        option: IOSSettings.App
      });
    }
    else {
      console.warn('Native settings not supported on web');
    }
  }
}
