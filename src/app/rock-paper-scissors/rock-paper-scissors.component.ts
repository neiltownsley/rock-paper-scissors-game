import {Component, OnInit} from '@angular/core';
import {WinningPlayerCalculator} from '../shared/rock-paper-scissors/winning.player.calculator';
import {RockPaperScissorsItemInterface} from '../shared/rock-paper-scissors/rock.paper.scissors.item.interface';
import {RockPaperScissorsGameInterface} from '../shared/rock-paper-scissors/rock.paper.scissors.game.interface';
import {RandomRockPaperScissorsItemGenerator} from '../shared/rock-paper-scissors/random.rock.paper.scissors.item.generator';
import {RockPaperScissorsItemTypes} from '../shared/rock-paper-scissors/rock.paper.scissors.item.types';
import {WinningPlayerInterface} from '../shared/rock-paper-scissors/winning.player.interface';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html'
})
export class RockPaperScissorsComponent implements OnInit {
  public rockPaperScissorsGameModel: RockPaperScissorsGameInterface;
  public playerSelectionOptions: Array<RockPaperScissorsItemInterface>;


  constructor(private winningPlayerCalculator: WinningPlayerCalculator,
              private randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) {
  }

  ngOnInit() {
    this.playerSelectionOptions = [
      RockPaperScissorsItemTypes.rockItemType,
      RockPaperScissorsItemTypes.paperItemType,
      RockPaperScissorsItemTypes.scissorsItemType
    ];
  }

  public playerSelectionEvent(playerSelection: RockPaperScissorsItemInterface): void {
    this.setRockPaperScissorsGameModel(playerSelection);
  }

  private setRockPaperScissorsGameModel(playerSelection: RockPaperScissorsItemInterface): void {
    const computerSelection = this.getRandomComputerSelection();
    const winningPlayer: WinningPlayerInterface = this.winningPlayerCalculator
      .getWinningPlayer(playerSelection, computerSelection);

    this.rockPaperScissorsGameModel = {
      computerPlayerSelection: computerSelection,
      playerSelection: playerSelection,
      gameResult: winningPlayer.winningPlayerLabel,
      playerScore: winningPlayer.playerPointCount,
      computerScore: winningPlayer.computerPointCount
    };
  }

  private getRandomComputerSelection(): RockPaperScissorsItemInterface {
    return this.randomRockPaperScissorsItemGenerator
      .getRandomRockPaperScissorsItem(this.playerSelectionOptions);
  }
}
