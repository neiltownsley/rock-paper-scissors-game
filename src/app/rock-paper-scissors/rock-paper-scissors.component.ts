import {Component, OnInit} from '@angular/core';
import {WinningPlayerCalculator} from '../shared/rock-paper-scissors/winning.player.calculator';
import {RockPaperScissorsItemInterface} from '../shared/rock-paper-scissors/rock.paper.scissors.item.interface';
import {RockPaperScissorsGameInterface} from '../shared/rock-paper-scissors/rock.paper.scissors.game.interface';
import {RandomRockPaperScissorsItemGenerator} from '../shared/rock-paper-scissors/random.rock.paper.scissors.item.generator';
import {RockPaperScissorsItemTypes} from '../shared/rock-paper-scissors/rock.paper.scissors.item.types';

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
    this.rockPaperScissorsGameModel = {
      computerPlayerSelection: computerSelection,
      playerSelection: playerSelection,
      gameResult: this.winningPlayerCalculator.getWinningPlayer(playerSelection, computerSelection)
    };
  }

  private getRandomComputerSelection(): RockPaperScissorsItemInterface {
    return this.randomRockPaperScissorsItemGenerator
      .getRandomRockPaperScissorsItem(this.playerSelectionOptions);
  }
}
