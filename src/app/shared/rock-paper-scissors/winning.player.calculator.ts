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
        return this.getWiningPlayer(this.playerDrawLabel, this.playerPointCount, this.computerPointCount);
      default:
        return this.getCalculatedWinningPlayer(playerSelection, computerPlayerSelection);
    }
  }

  private getCalculatedWinningPlayer(playerSelection: RockPaperScissorsItemInterface,
                                     computerPlayerSelection: RockPaperScissorsItemInterface): WinningPlayerInterface {
    switch (this.playerHasWinningRockPaperScissorsItem(playerSelection, computerPlayerSelection)) {
      case true:
        this.playerPointCount = (this.playerPointCount) + (1);
        return this.getWiningPlayer(this.playerWinLabel, this.playerPointCount, this.computerPointCount);
      default:
        this.computerPointCount = (this.computerPointCount) + (1);
        return this.getWiningPlayer(this.computerPlayerWinLabel, this.playerPointCount, this.computerPointCount);
    }
  }

  private getWiningPlayer(winningPlayerLabel: string, playerPoints: number, computerPoints: number): WinningPlayerInterface {
    return {
      winningPlayerLabel: winningPlayerLabel,
      playerPointCount: playerPoints,
      computerPointCount: computerPoints
    };
  }

  private playerHasWinningRockPaperScissorsItem(playerSelection: RockPaperScissorsItemInterface,
                                                computerSelection: RockPaperScissorsItemInterface): boolean {
    return ((playerSelection.value) - (computerSelection.value) + 3) % 3 === 1;
  }

}
