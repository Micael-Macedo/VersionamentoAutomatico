import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from "./core/components/inputs/inputs.component";
import { ButtonComponent } from "./core/components/button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputsComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VersionamentoAutomatico';
}
