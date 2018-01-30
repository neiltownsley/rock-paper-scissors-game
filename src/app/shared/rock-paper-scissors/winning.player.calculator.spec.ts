import { async, inject, TestBed } from '@angular/core/testing';
import { WinningPlayerCalculator } from './winning.player.calculator';
import { RockPaperScissorsItemTypes } from './rock.paper.scissors.item.types';
import { WinningPlayerInterface } from './winning.player.interface';

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

  const getWinningPlayer = (winningPlayerLabel: string,
                            playerPointCount?: number,
                            computerPointCount?: number): WinningPlayerInterface => {
    return {
      winningPlayerLabel: winningPlayerLabel,
      playerPointCount: playerPointCount,
      computerPointCount: computerPointCount
    };
  };

  const computerPlayerWinLabel = 'Computer wins!!';
  const playerWinLabel = 'Player 1 wins!!';
  const playerDrawLabel = 'Its a Draw!!';

  it('getWinningPlayer, should calculate a draw when both players have selected Rock',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.rockItemType, RockPaperScissorsItemTypes.rockItemType)
        ).toEqual(getWinningPlayer(playerDrawLabel, 0, 0));
      })
    ));

  it('getWinningPlayer, should calculate a draw when both players have selected Paper',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.paperItemType, RockPaperScissorsItemTypes.paperItemType)
        ).toEqual(getWinningPlayer(playerDrawLabel, 0, 0));
      })
    ));

  it('getWinningPlayer, should calculate a draw when both players have selected Scissors',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.scissorsItemType, RockPaperScissorsItemTypes.scissorsItemType)
        ).toEqual(getWinningPlayer(playerDrawLabel, 0, 0));
      })
    ));

  it('getWinningPlayer, should calculate a computer win when player selected Scissors and computer selects Rock',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.scissorsItemType, RockPaperScissorsItemTypes.rockItemType)
        ).toEqual(getWinningPlayer(computerPlayerWinLabel, 0, 1));
      })
    ));

  it('getWinningPlayer, should calculate a player win when player selected Rock and computer selects Scissors',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.rockItemType, RockPaperScissorsItemTypes.scissorsItemType)
        ).toEqual(getWinningPlayer(playerWinLabel, 1, 0));
      })
    ));


  it('getWinningPlayer, should calculate a player win when player selected Scissors and computer selects Paper',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer
          (RockPaperScissorsItemTypes.scissorsItemType, RockPaperScissorsItemTypes.paperItemType)
        ).toEqual(getWinningPlayer(playerWinLabel, 1, 0));
      })
    ));


  it('getWinningPlayer, should calculate a computer win when player selected Paper and computer selects Scissors',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
      expect(winningPlayerCalculator.getWinningPlayer(
        RockPaperScissorsItemTypes.paperItemType, RockPaperScissorsItemTypes.scissorsItemType)
      ).toEqual(getWinningPlayer(computerPlayerWinLabel, 0, 1));
      })
    ));


  it('getWinningPlayer, should calculate a player win when player selected Paper and computer selects Rock',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.paperItemType, RockPaperScissorsItemTypes.rockItemType)
        ).toEqual(getWinningPlayer(playerWinLabel, 1, 0));
      })
    ));

  it('getWinningPlayer, should calculate a computer win when player selected Rock and computer selects Paper',
    async(inject([WinningPlayerCalculator], (winningPlayerCalculator: WinningPlayerCalculator) => {
        expect(winningPlayerCalculator.getWinningPlayer(
          RockPaperScissorsItemTypes.rockItemType, RockPaperScissorsItemTypes.paperItemType)
        ).toEqual(getWinningPlayer(computerPlayerWinLabel, 0, 1));
      })
    ));
});
