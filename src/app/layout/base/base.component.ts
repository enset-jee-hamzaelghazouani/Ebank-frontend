import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/component/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/component/footer/footer.component';

@Component({
  selector: 'app-base',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './base.component.html'
})
export class BaseComponent {

}
