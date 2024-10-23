import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  clicado: boolean = false;
  pathFish: string = '../../../assets/green-fish-vector.svg';
  pathProf: string = '../../../assets/white-profile.svg';

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateState(event.url);
      }
    });
  }

  isOnLoginOrRegisterPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/landing';
  }

  updateState(url: string) {
    if (url.includes('/systems') || url.includes('/newsystem') || url.includes('/system')) {
      this.clicado = true;
    } else if (url.includes('/profile')) {
      this.clicado = false;
    }
    this.updateImages();
  }

  setState(click: boolean) {
    if (this.clicado !== click) {
      this.clicado = click;
      if (this.clicado) {
        this.router.navigate(['/systems']);
        console.log(this.clicado, "pagina de system");
      } else {
        this.router.navigate(['/profile']);
        console.log(this.clicado, "pagina de profile");
      }
      this.updateImages();
    }
  }

  updateImages() {
    if (this.clicado) {
      this.pathFish = '../../../assets/green-fish-vector.svg';
      this.pathProf = '../../../assets/white-profile.svg';
    } else {
      this.pathFish = '../../../assets/white-fish-vector.svg';
      this.pathProf = '../../../assets/green-profile.svg';
    }
  }

  exit(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}




/*export class NavbarComponent {

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateState(event.url);
      }
    });
  }

  clicado: boolean = false;
  pathFish: String = '../../../assets/green-fish-vector.svg';
  pathProf: String = '../../../assets/white-profile.svg';



  isOnLoginOrRegisterPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/landing';
  }

  updateState(url: string) {
    if (url.includes('/systems')) {
      this.clicado = true;
    } else if (url.includes('/profile')) {
      this.clicado = false;
    }
  }

  setState(click: boolean){
    if(this.clicado !== click){
      this.clicado = click;
      if(this.clicado == true ){
        this.router.navigate(['/systems'])
        this.pathFish = '../../../assets/white-fish-vector.svg',
        this.pathProf = '../../../assets/green-profile.svg'
        console.log("Selecao peixe ", this.clicado)
      } else {
        this.pathFish = '../../../assets/green-fish-vector.svg',
        this.pathProf = '../../../assets/white-profile.svg',
        this.router.navigate(['/profile']),
        console.log("Selecao perfi  ", this.clicado)
      }
    }
  }
}*/
