import {async, inject, TestBed} from '@angular/core/testing';
import {WinningPlayerCalculator} from './winning.player.calculator';
import {RockPaperScissorsItemTypes} from './rock.paper.scissors.item.types';

describe('WinningPlayerCalculator', () => {

  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          WinningPlayerCalculator,
        ],
      });
    }));

  const computerPlayerWinLabel = 'Computer wins!!';
  const playerWinLabel = 'Player 1 wins!!';
  const playerDrawLabel = 'Its a Draw!!';

  it('getWinningPlayer, should calculate a draw when both players have selected Rock',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.rockItemType, RockPaperScissorsItemTypes.rockItemType)
        ).toBe(playerDrawLabel);
      })
    ));

  it('getWinningPlayer, should calculate a draw when both players have selected Paper',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.paperItemType, RockPaperScissorsItemTypes.paperItemType)
        ).toBe(playerDrawLabel);
      })
    ));

  it('getWinningPlayer, should calculate a draw when both players have selected Scissors',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.scissorsItemType, RockPaperScissorsItemTypes.scissorsItemType)
        ).toBe(playerDrawLabel);
      })
    ));

  it('getWinningPlayer, should calculate a computer win when player selected Scissors and computer selects Rock',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.scissorsItemType, RockPaperScissorsItemTypes.rockItemType)
        ).toBe(computerPlayerWinLabel);
      })
    ));

  it('getWinningPlayer, should calculate a player win when player selected Rock and computer selects Scissors',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.rockItemType, RockPaperScissorsItemTypes.scissorsItemType)
        ).toBe(playerWinLabel);
      })
    ));


  it('getWinningPlayer, should calculate a player win when player selected Scissors and computer selects Paper',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer
          (RockPaperScissorsItemTypes.scissorsItemType, RockPaperScissorsItemTypes.paperItemType)
        ).toBe(playerWinLabel);
      })
    ));

  it('getWinningPlayer, should calculate a computer win when player selected Paper and computer selects Scissors',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.paperItemType, RockPaperScissorsItemTypes.scissorsItemType)
        ).toBe(computerPlayerWinLabel);
      })
    ));


  it('getWinningPlayer, should calculate a player win when player selected Paper and computer selects Rock',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.paperItemType, RockPaperScissorsItemTypes.rockItemType)
        ).toBe(playerWinLabel);
      })
    ));

  it('getWinningPlayer, should calculate a computer win when player selected Rock and computer selects Paper',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.rockItemType, RockPaperScissorsItemTypes.paperItemType)
        ).toBe(computerPlayerWinLabel);
      })
    ));
});
