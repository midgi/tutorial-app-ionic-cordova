import { Component, OnInit } from '@angular/core';
import { MathCalculator } from '@ionic-native/math-calculator/ngx';
import { Platform } from '@ionic/angular';
declare let window: any; // <--- Declare it like this
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  result: any;
  error: any;
  num1: number;
  num2: number;
  loaded: boolean = false;

  constructor(
    private mathCalculator: MathCalculator,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.platform.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.loaded = true;
      console.log("cordova obj: "); console.dir(JSON.stringify(window.cordova));
      console.log("cordova plugin: "); console.dir(window.cordova.plugin);
      console.log("cordova plugins: "); console.dir(window.cordova.plugins);
      window.plugins.mathcalculator.add({param1: 1, param2: 2}, (result)=>{console.log("result is "+result)}, (error)=>{console.log("error: "+error)});
      window.plugins.flashlight.available(function (isAvailable) {
        if (isAvailable) {

          // switch on
          window.plugins.flashlight.switchOn(
            function () { }, // optional success callback
            function () { }, // optional error callback
            { intensity: 0.3 } // optional as well
          );

          // switch off after 3 seconds
          setTimeout(function () {
            window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
          }, 3000);

        } else {
          alert("Flashlight not available on this device");
        }
      });
    })
  }

  add(num1, num2) {
    let data = {
      param1: num1,
      param2: num2
    };

    this.mathCalculator.add(data).then(result => {
      this.result = result;
    }).catch(err => {
      this.error = err;
    });
  }

  substract(num1, num2) {
    let data = {
      param1: num1,
      param2: num2
    };
    this.mathCalculator.substract(data).then(result => {
      this.result = result;
    }).catch(err => {
      this.error = err;
    });
  }
}
