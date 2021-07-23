import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { User } from '../../../Interfaces/user.interface';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  errorMsg: string = '';

  constructor(
    private auth: AuthService,
    private us: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  signup(form) {
    let data: User = form.value;
    this.auth
      .signUp(data.email, data.password)
      .then((d) => {
        (this.errorMsg = ''),
          this.us.addNewUser(d.user.uid, data.name, data.address).then(() => {
            this.router.navigate(['/']);
          });
      })
      .catch((err) => {
        this.errorMsg = err.message;
      });
  }
}
