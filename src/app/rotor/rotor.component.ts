import { Component, OnInit } from '@angular/core';

export class RotorComponent {

  private left: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private right: string;
  private notch: string;

  constructor(wiring: string, notch: string) {
    this.right = wiring;
    this.notch = notch;
  }

  public forward(signal: number) {
    let letter = this.right[signal];
    return this.left.indexOf(letter)
  }

  public backward(signal: number) {
    let letter = this.left[signal];
    return this.right.indexOf(letter);
  }

  public rotate(n: number = 1) {
    for (let i = 0; i < n; i++) {
      let rtLeft = this.left.substring(1, this.left.length) + this.left.substring(0,1);
      let rtRight = this.right.substring(1, this.right.length) + this.right.substring(0,1);
      this.left = rtLeft;
      this.right = rtRight;
    }
  }

  private counterRotate(n: number) {
    for(let i=0; i< n; i++) {
      let rtLeft = this.left.substring(this.left.length-1, this.left.length) + this.left.substring(0, this.left.length-1);
      let rtRight = this.right.substring(this.right.length-1, this.right.length) + this.right.substring(0, this.right.length-1);
      this.left = rtLeft;
      this.right = rtRight;
    }
  }

  public setRing(n: number) {
    this.counterRotate(n-1);
    let notchPos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(this.notch);
    this.notch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[(notchPos - 1) % 26]
  }

  public rotateToLetter(letter: string) {
    let n = this.left.indexOf(letter);
    this.rotate(n);
  }

  public isNotch() {
    if (this.notch === this.left[0]) {
      return true;
    } else {
      return false;
    }
  }

  

}
