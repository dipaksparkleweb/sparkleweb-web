import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-verifypassword',
  templateUrl: './verifypassword.component.html',
  styleUrls: ['./verifypassword.component.less']
})
export class VerifypasswordComponent implements OnInit {

  user: User;
  form: FormGroup;
  id: string;
  token: any;
  email: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {
    const url = window.location.href;
    console.log(url);
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      if (url.indexOf) {
        this.token = httpParams.get('token');
        this.email = httpParams.get('email');
        if(this.token!=null)
        {
          this.token=this.token.replace(/ /g, "\+");
        }
      }
  }
}

  ngOnInit(): void {
    //get queryString from url
    
    // password not required in edit mode
    const passwordValidators = [Validators.minLength(8)];
    this.isAddMode = true;
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }
    this.form = this.formBuilder.group({
      token: this.token.replace(/ /g, "\+"),
      email: this.email,
      newpassword: ['', passwordValidators],
      confirmpassword: ['', passwordValidators]
    }, { validator: this.mustMatch('newpassword', 'confirmpassword') });

  }
  mustMatch(controlName: string, matchingControlName: string) {
    return (group: FormGroup) => {
      const control = group.controls[controlName];
      const matchingControl = group.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log(this.f.token.value);
    console.log(this.f.email.value);
  debugger;
    this.loading = true;
    this.accountService.verifypassword(this.f.token.value, this.f.newpassword.value, this.f.email.value)
      .pipe(first())
      .subscribe({
        next: (user) => {
          // get return url from query parameters or default to home page
          if (user.isSuccess) {
            this.router.navigateByUrl("login");
          }
          else {
            console.warn('error');
            this.alertService.error(user.errors[0]);
            this.loading = false;
            user.isSuccess = false;
          }
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}
