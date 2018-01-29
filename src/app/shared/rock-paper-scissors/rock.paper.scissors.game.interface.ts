import {RockPaperScissorsItemInterface} from './rock.paper.scissors.item.interface';

export interface RockPaperScissorsGameInterface {
  computerPlayerSelection?: RockPaperScissorsItemInterface;
  playerSelection?: RockPaperScissorsItemInterface;
  gameResult?: string;
  computerScore?: number;
  playerScore?: number;
}
