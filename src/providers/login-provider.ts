import { Injectable } from '@angular/core';
import { IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { Angular2TokenService } from 'angular2-token';
import { Storage } from '@ionic/storage';
import { Config } from './config';
import { UserApi } from './user-api';
import { ResponseUtility } from './response-utility';
import { Events } from 'ionic-angular';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public tokenService: Angular2TokenService,
    public loadingController: LoadingController,
    public storage: Storage,
    public events: Events,
    public config: Config,
    public userApi: UserApi,
    public respUtility: ResponseUtility) {
    console.log('Hello LoginProvider Provider');
  }

  clear() {
    this.storage.clear();
  }

  auto_login(navCtrl=null) {
    let email = "";
    let password = "";
    this.storage
      .get("email").then((emailval) => {
        email = emailval;
        if (email) {
          this.storage
            .get("password").then((pval) => {
              password = pval;
              if(password) {
                console.log(`auto_login: email = ${email}, password = ${password}`);
                this.login(email, password, navCtrl);
              }
            });
        }
      });

  }

  login(email, password, navCtrl) {

    let loader = this.loadingController.create({
      content: 'Login in progress ...'
    });

    loader.present();

    this.tokenService.signIn({ email: email, password: password }).subscribe(
      res => {
        console.log(res);
        this.storage.set("email", email);
        this.storage.set("password", password);
        this.storage.set("push_token", this.config.props["push_token"]);
        // Save the push token now that the user is logged in
        console.log(this.tokenService.currentUserData);
        this.events.publish('user:login:success');

        let user = {
          id: this.tokenService.currentUserData.id,
          push_token: this.config.props["push_token"],
          user: { id: this.tokenService.currentUserData.id, push_token: this.config.props["push_token"] }
        };

        this.userApi.updateUser(user).subscribe(
          resp => {
            console.log("Saved push_token to server");
          },
          error => {
            console.log("Failed to save push_token to server. Notification will not work !!");
          }
        );

        loader.dismiss();
        if(navCtrl != null) {
          navCtrl.popToRoot();
        }
      },
      error => {
        console.log(error);
        loader.dismiss();
        this.respUtility.showFailure(error);
        this.events.publish('user:login:failed');
      }
    );
  }


}
