﻿import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import Swal from 'sweetalert2';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        Swal.fire({
          title: 'Are you sure want to Logout?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Logout!',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.value) {
            this.accountService.logout();
            // const user = this.users.find(x => x.id === id);
            // user.isDeleting = true;
            // this.accountService.delete(id)
            //     .pipe(first())
            //     .subscribe(() => this.users = this.users.filter(x => x.id !== id));
            Swal.fire(
              'Logout!',
              'Logout has been successfully.',
              'success'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
            )
          }
        })
    
        
      }
}