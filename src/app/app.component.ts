import { Component } from '@angular/core';
import { EnigmaService } from './enigma.service';
import { KeyboardService } from './keyboard.service';
import { PlugboardService } from './plugboard.service';
import { ReflectorService } from './reflector.service';
import { RotorService } from './rotor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enigma-machine';
  message: string;
  ciphered: string;
  leftRotor: string = "I";
  centerRotor: string = "II";
  rightRotor: string = "III";
  reflector: string ="A";
  key: string = "DOG";
  rings: string = "4 2 4";
  pairs: string ="AR GK OX"

  constructor(private enigma: EnigmaService) {
    enigma.setPairs(["AR", "GK", "OX"]);
    enigma.setReflector("A");
    enigma.setRotor("left", "I");
    enigma.setRotor("middle", "II");
    enigma.setRotor("right", "III");
    enigma.setKey("DOG");
    enigma.setRings([4,2,4]);
    this.message = "";
    this.ciphered = ""
  }

  changeLeft(value:any) {
    this.enigma.setRotor('left', value)
  }

  changeCenter(value:any) {
    this.enigma.setRotor('middle', value)
  }

  changeRight(value:any) {
    this.enigma.setRotor('right', value)
  }

  changeRef(value:any) {
    this.enigma.setReflector(value);
  }

  onKey(value: string) {
    this.key = value.toUpperCase();
    this.enigma.setKey(this.key);
  }

  onRings(value: string) {
    this.rings = value;
    let ringArray = this.rings.split(" ");
    let newArray: number[] = [];
    for (let i = 0; i < ringArray.length; i++) {
      newArray.push(Number(ringArray[i]));
    }
    this.enigma.setRings(newArray);
  }

  onPairs(value: string) {
    value = value.toUpperCase();
    this.pairs = value;
    this.enigma.setPairs(this.pairs.split(" "));
  }

  encipher(value:string) {
    value = value.toUpperCase();
    value = value.replace(/[^A-Za-z\s]/g, '');
    this.message = value;
    this.ciphered = "";
    for (let i = 0; i < this.message.length; i++) {
      if(this.message[i] === " ") {
        this.ciphered += this.enigma.encrypt("X");
      } else {
        this.ciphered += this.enigma.encrypt(this.message[i]);
      }
    }
  }
}