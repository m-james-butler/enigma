import { Injectable } from '@angular/core';
import { KeyboardService } from './keyboard.service';
import { PlugboardService } from './plugboard.service';
import { ReflectorService } from './reflector.service';
import { RotorService } from './rotor.service';

@Injectable({
  providedIn: 'root'
})
export class EnigmaService {

  constructor(private keyboard: KeyboardService,
              private plugboard: PlugboardService,
              private reflector: ReflectorService,
              private rotors: RotorService) { 
                //blank constructor
              }

  public setPairs(pairs: string[]) {
    this.plugboard.setPairs(pairs)
  }

  public setReflector(ref: string) {
    this.reflector.setReflector(ref);
  }

  public setRotor(pos: string, choice: string) {
    switch(pos) {
      case "left": {
        this.rotors.setLeft(choice);
        break;
      }
      case "middle": {
        this.rotors.setMiddle(choice);
        break;
      }
      case "right": {
        this.rotors.setRight(choice);
        break;
      }
      default: {
        break;
      }
    }
  }

  public setKey(key: string) {
    this.rotors.rightRotor.rotateToLetter(key[0]);
    this.rotors.middleRotor.rotateToLetter(key[1]);
    this.rotors.leftRotor.rotateToLetter(key[2]);
  }

  public setRings(n:number[]) {
    this.rotors.rightRotor.setRing(n[0]);
    this.rotors.middleRotor.setRing(n[1]);
    this.rotors.leftRotor.setRing(n[2]);
  }

  public encrypt(letter: string): string {

    //First, rotate the rotors properly

    //First check if all rotors should rotate. This happens if both the middle and right rotors are at their notch position OR if only the middle rotor is.
    if ( this.rotors.middleRotor.isNotch() ){
      console.log("rotate all")
      this.rotors.rightRotor.rotate(1);
      this.rotors.middleRotor.rotate(1);
      this.rotors.leftRotor.rotate(1);
    } else if (this.rotors.rightRotor.isNotch()) {
      console.log("rotate 2")
      this.rotors.rightRotor.rotate(1);
      this.rotors.middleRotor.rotate(1);
    } else {
      console.log("rotate right")
      this.rotors.rightRotor.rotate(1);
    }

    let signal = this.keyboard.forward(letter);
    signal = this.plugboard.forward(signal);
    signal = this.rotors.rightRotor.forward(signal);
    signal = this.rotors.middleRotor.forward(signal);
    signal = this.rotors.leftRotor.forward(signal);
    signal = this.reflector.reflect(signal);
    signal = this.rotors.leftRotor.backward(signal);
    signal = this.rotors.middleRotor.backward(signal);
    signal = this.rotors.rightRotor.backward(signal);
    signal = this.plugboard.backward(signal);
    return this.keyboard.backward(signal);
  }
}
