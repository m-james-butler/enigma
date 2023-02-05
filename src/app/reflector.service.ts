import { Injectable } from '@angular/core';

  const A = "EJMZALYXVBWFCRQUONTSPIKHGD";
  const B = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
  const C = "FVPJIAOYEDRZXWGCTKUQSBNMHL";
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

@Injectable({
  providedIn: 'root'
})
export class ReflectorService {
  private left: string = ALPHABET;
  private right: string;

  constructor() {
    this.right = A;
   }

   public setReflector(ref: string) {
    if(ref == "A") {
      this.right = A
    }
    if(ref == "B") {
      this.right = B
    }
    if(ref == "C") {
      this.right = C
    }
   }

   public reflect(signal: number) {
    let letter = this.right[signal];
    return this.left.indexOf(letter);

  }
}
