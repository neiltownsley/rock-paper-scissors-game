import {Injectable} from '@angular/core';
import {RockPaperScissorsItemInterface} from './rock.paper.scissors.item.interface';
import {WinningPlayerInterface} from './winning.player.interface';

@Injectable()
export class WinningPlayerCalculator {
  private readonly playerWinLabel: string = 'Player 1 wins!!';
  private readonly computerPlayerWinLabel: string = 'Computer wins!!';
  private readonly playerDrawLabel: string = 'Its a Draw!!';
  private computerPointCount = 0;
  private playerPointCount = 0;

  public getWinningPlayer(playerSelection: RockPaperScissorsItemInterface,
                          computerPlayerSelection: RockPaperScissorsItemInterface): WinningPlayerInterface {
    switch (playerSelection.value === computerPlayerSelection.value) {
      case true:
        return {
          winningPlayerLabel: this.playerDrawLabel,
          computerPointCount: this.computerPointCount,
          playerPointCount: this.playerPointCount
        };
      default:
        return this.getCalculatedWinningPlayer(playerSelection, computerPlayerSelection);
    }
  }

  private getCalculatedWinningPlayer(playerSelection: RockPaperScissorsItemInterface,
                                     computerPlayerSelection: RockPaperScissorsItemInterface): WinningPlayerInterface {
    switch (this.playerHasWinningRockPaperScissorsItem(playerSelection, computerPlayerSelection)) {
      case true:
        this.playerPointCount = (this.playerPointCount) + (1);
        return {
          winningPlayerLabel: this.playerWinLabel,
          playerPointCount: this.playerPointCount,
          computerPointCount: this.computerPointCount
        };
      default:
        this.computerPointCount = (this.computerPointCount) + (1);
        return {
          winningPlayerLabel: this.computerPlayerWinLabel,
          computerPointCount: this.computerPointCount,
          playerPointCount: this.playerPointCount
        };
    }
  }

  private playerHasWinningRockPaperScissorsItem(playerSelection: RockPaperScissorsItemInterface,
                                                computerSelection: RockPaperScissorsItemInterface): boolean {
    return ((playerSelection.value) - (computerSelection.value) + 3) % 3 === 1;
  }

}
