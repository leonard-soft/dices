import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diceOne = '../assets/dice1.png';
  diceTwo = '../assets/dice1.png';
  numberOne: number | undefined;
  numberTwo: number | undefined;

  diceLaunch(): void {
    this.numberOne = Math.round(Math.random() * 5 + 1);
    this.numberTwo = Math.round(Math.random() * 5 + 1);
    this.diceOne = `../assets/dice${this.numberOne}.png`;
    this.diceTwo = `../assets/dice${this.numberTwo}.png`;

    if (this.diceOne == this.diceTwo) {
      let html = `
         <br/> <br> <br>
         <div style="display:flex;margin:0 auto;" >
          <img style="background-color:#F1948A;border-radius:50px;display:block;margin:auto;" src="${this.diceOne}" alt="Alternate Text" />
          <img style="background-color:#F1948A;border-radius:50px;display:block;margin:auto;" src="${this.diceTwo}" alt="Alternate Text" />
         </div> <br> <br> <br> 
         <h1 align="center">¡Congratulations!</h1>
      `;
      let documents: any = document.querySelector("#space");
      documents.innerHTML = html;
    } 

  }

}
