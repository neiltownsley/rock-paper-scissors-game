import {Injectable} from '@angular/core';
import {RockPaperScissorsItemInterface} from './rock.paper.scissors.item.interface';

@Injectable()
export class WinningPlayerCalculator {
  private readonly playerWinLabel: string = 'Player 1 wins!!';
  private readonly computerPlayerWinLabel: string = 'Computer wins!!';
  private readonly playerDrawLabel: string = 'Its a Draw!!';

  public getWinningPlayer(playerSelection: RockPaperScissorsItemInterface,
                          computerPlayerSelection: RockPaperScissorsItemInterface): string {
    switch (playerSelection.value === computerPlayerSelection.value) {
      case true:
        return this.playerDrawLabel;
      default:
        return this.getCalculatedWinningPlayer(playerSelection, computerPlayerSelection);
    }
  }

  private getCalculatedWinningPlayer(playerSelection: RockPaperScissorsItemInterface,
                                     computerPlayerSelection: RockPaperScissorsItemInterface): string {
    switch (this.playerHasWinningRockPaperScissorsItem(playerSelection, computerPlayerSelection)) {
      case true:
        return this.playerWinLabel;
      default:
        return this.computerPlayerWinLabel;
    }
  }

  private playerHasWinningRockPaperScissorsItem(playerSelection: RockPaperScissorsItemInterface,
                                                computerSelection: RockPaperScissorsItemInterface): boolean {
    return ((playerSelection.value) - (computerSelection.value) + 3) % 3 === 1;
  }

}
