import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { RatingApi } from '../../providers/rating-api';
import { ResponseUtility } from '../../providers/response-utility';



@Component({
  selector: 'page-rating-form',
  templateUrl: 'rating-form.html',
})
export class RatingForm {

  rating: {};
  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingController: LoadingController, 
    public ratingApi: RatingApi,
    public respUtility: ResponseUtility) {

    this.rating = this.navParams.data;

    this.slideOneForm = formBuilder.group({
       
      stars: [''],
       
      comments: [''],
        
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingsForm');
  }


  save() {
    this.submitAttempt = true;
    //console.log(this.rating);
    let loader = this.loadingController.create({
      content: 'Saving ...'
    });

    
    if (!this.slideOneForm.valid) {
    }
    
    else {
      this.submitAttempt = false;
      loader.present();
  
      if (this.rating["id"]) {
        this.ratingApi.updateRating(this.rating).subscribe(
          rating => {
            this.respUtility.showSuccess('Rating saved successfully.');
          },
          error => {
            this.respUtility.showFailure(error);
            loader.dismiss();
          },
          () => { loader.dismiss(); }
        );
      } else {
        this.ratingApi.createRating(this.rating).subscribe(
          rating => {
            this.respUtility.showSuccess('Rating saved successfully.');
          },
          error => {
            this.respUtility.showFailure(error);
            loader.dismiss();
          },
          () => { loader.dismiss(); }
        );
      }
    }
  }

}
