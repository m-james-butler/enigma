import { Injectable } from '@angular/core';
import { RotorComponent } from './rotor/rotor.component';

  const ROTOR_I = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
  const ROTOR_II = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
  const ROTOR_III = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
  const ROTOR_IV = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
  const ROTOR_V = "VZBRGITYUPSDNHLXAWMJQOFECK";

@Injectable({
  providedIn: 'root'
})
export class RotorService {
  public rightRotor: RotorComponent;
  public middleRotor: RotorComponent;
  public leftRotor: RotorComponent;

  private rI = new RotorComponent(ROTOR_I, "Q");
  private rII = new RotorComponent(ROTOR_II, "E");
  private rIII = new RotorComponent(ROTOR_III, "V");
  private rIV = new RotorComponent(ROTOR_IV, "J");
  private rV = new RotorComponent(ROTOR_V, "Z");

  constructor() {
    this.rightRotor = this.rI;
    this.middleRotor = this.rII;
    this.leftRotor = this.rIII
   }

   public setRight(rotor: string) {
    switch(rotor) {
      case "I": {
        this.rightRotor = this.rI;
        break;
      }
      case "II": {
        this.rightRotor = this.rII;
        break;
      }
      case "III": {
        this.rightRotor = this.rIII;
        break;
      }
      case "IV": {
        this.rightRotor = this.rIV;
        break;
      }
      case "V": {
        this.rightRotor = this.rV;
        break;
      }
    }
   }

   public setMiddle(rotor: string) {
    switch(rotor) {
      case "I": {
        this.middleRotor = this.rI;
        break;
      }
      case "II": {
        this.middleRotor = this.rII;
        break;
      }
      case "III": {
        this.middleRotor = this.rIII;
        break;
      }
      case "IV": {
        this.middleRotor = this.rIV;
        break;
      }
      case "V": {
        this.middleRotor = this.rV;
        break;
      }
    }
   }

   public setLeft(rotor: string) {
    switch(rotor) {
      case "I": {
        this.leftRotor = this.rI;
        break;
      }
      case "II": {
        this.leftRotor = this.rII;
        break;
      }
      case "III": {
        this.leftRotor = this.rIII;
        break;
      }
      case "IV": {
        this.leftRotor = this.rIV;
        break;
      }
      case "V": {
        this.leftRotor = this.rV;
        break;
      }
    }
   }
}
