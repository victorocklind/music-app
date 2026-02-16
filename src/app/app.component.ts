import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-recs';
  constructor(private authService: AuthService, private route: ActivatedRoute,
) {}

ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      if (code) {
        console.log('Authorization code:', code);
      }
    });
  }



login() {
  console.log("Test login")
  this.authService.login();
}

}
