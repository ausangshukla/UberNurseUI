import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ReferralApi } from '../../providers/referral-api';
import { ResponseUtility } from '../../providers/response-utility';
import { Angular2TokenService } from 'angular2-token';
import {ReferralDetails} from './referral-details'

@IonicPage()
@Component({
  selector: 'page-referral',
  templateUrl: 'referral.html',
})
export class ReferralPage {

  referrals: {};
  referral;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private tokenService: Angular2TokenService,
    public loadingController: LoadingController,
    public referralApi: ReferralApi, 
    public respUtility: ResponseUtility) {
  }


    loadAllResponses() {
    let loader = this.loadingController.create({
      content: 'Loading Responses...'
    });

    loader.present();

    this.referralApi.getReferrals().subscribe(
      referrals => {
        this.referrals = referrals;
        console.log("Loaded referrals");
      },
      error => { this.respUtility.showFailure(error); loader.dismiss(); },
      () => { loader.dismiss(); }
    );
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter Referralss');
    this.loadAllResponses();
  }

  getReferralDetails(referral) {
    let loader = this.loadingController.create({
      content: 'Loading Responses...'
    });

    loader.present()
    this.referralApi.getReferralDetails(referral.id).subscribe(
      referral => {
        this.referral = referral;
        console.log("got referral " + referral);
        this.navCtrl.push(ReferralDetails, referral);
      },
      error => { this.respUtility.showFailure(error); loader.dismiss(); },
      () => { loader.dismiss(); }
    );

  }

}
