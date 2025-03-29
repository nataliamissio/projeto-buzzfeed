import { Component } from '@angular/core';
import { QuizzComponent } from "../../componets/quizz/quizz.component";

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
  }
}
