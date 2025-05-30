import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  alertButtons = [
    {
      text: 'Yes',
      handler: () => {
        console.log('Button was clicked.');
      }
    },
    {
      text: 'No',
      handler: () => {
        console.log('Button was not clicked.');
      }
    },
    {
      text: 'Cancel',
      handler: () => {
        console.log('Cancel button was clicked.');
      }
    }
  ];

  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congrats',
      message: 'You did not mess up',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
