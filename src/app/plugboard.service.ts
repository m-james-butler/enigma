import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlugboardService {

  private left: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private right: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  constructor() { 
    //intentionally blank
  }

  public setPairs(pairs: string[]) {
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      let A = pair[0];
      let B = pair[1];

      let pos_A = this.left.indexOf(A);
      let pos_B = this.left.indexOf(B);
      let left_arr = this.left.split("");
      left_arr[pos_A] = B;
      left_arr[pos_B] = A;
      this.left = left_arr.join("");
    }
  }

  public forward(signal: number) {
    let letter = this.right[signal];
    return this.left.indexOf(letter)
  }

  public backward(signal: number) {
    let letter = this.left[signal];
    return this.right.indexOf(letter);
  }
}
