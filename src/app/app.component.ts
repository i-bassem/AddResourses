import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Task A technologies';
  url: string=''
  isReset=false;

  constructor(private router: Router){

  }
  ngOnInit(): void {

    // In order not show Header & Footer In certain pages
    this.router.events.pipe(
                            filter((event: any) =>event instanceof NavigationEnd),
                            map((e: NavigationEnd) =>
                              {
                               //console.log(e);
                               this.url = e.urlAfterRedirects
                               if(this.url.includes('/reset', 0)){this.isReset=true;}
                              })
                          )
                      .subscribe();
  }
}
