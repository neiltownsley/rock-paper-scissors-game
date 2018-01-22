import {RockPaperScissorsItemInterface} from './rock.paper.scissors.item.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class RandomRockPaperScissorsItemGenerator {

  public getRandomRockPaperScissorsItem(playerSelectionOptions: Array<RockPaperScissorsItemInterface>): RockPaperScissorsItemInterface {
    const randomNumber: number = Math.floor(Math.random() * playerSelectionOptions.length);
    return playerSelectionOptions[randomNumber];
  }
}
