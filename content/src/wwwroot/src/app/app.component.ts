import { Component, OnInit } from '@angular/core';

//#if (pwa)
import { SwUpdate } from '@angular/service-worker';
//#endif

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  //#if (pwa)
  constructor(private _swUpdate: SwUpdate) {}
  

  ngOnInit() {
    
    if (this._swUpdate.isEnabled) {
      this._swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
        window.location.reload();
        }
      });
    }
    
  }
  //#else
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  //#endif
}
    
  

