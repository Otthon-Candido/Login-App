import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('dropDownUser') dropDownUser!: ElementRef;
  btnMenuUserOn = false;
  user$!: Observable<User | null>;
  constructor(private renderer: Renderer2, private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.dropDownUser?.nativeElement.contains(e.target) &&
        this.btnMenuUserOn
      ) {
        this.btnMenuUserOn = false;
      }
    });
  }

  logout() {
    this.router.navigate(['login'])
    this.userService.logOut();
  }
}
