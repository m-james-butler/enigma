import { Injectable } from '@angular/core';

const ALPHABET: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  constructor() {
    //constructor intentionally blank
   }

   public forward(letter: string) {
    let signal: number = ALPHABET.indexOf(letter);
    return signal;
  }

  public backward(signal: number) {
    let letter: string = ALPHABET[signal];
    return letter;
  }
}
