import {async, inject, TestBed} from '@angular/core/testing';
import {RandomRockPaperScissorsItemGenerator} from './random.rock.paper.scisscors.iterm.generator';
import {RockPaperScissorsItemInterface} from './rock.paper.scissors.item.interface';
import {RockPaperScissorsItemTypes} from './rock.paper.scissors.item.types';

describe('RandomRockPaperScissorsItemGenerator', () => {

  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          RandomRockPaperScissorsItemGenerator,
        ],
      });
    }));

  const playerSelectionOptions = [
    RockPaperScissorsItemTypes.rockItemType,
    RockPaperScissorsItemTypes.paperItemType,
    RockPaperScissorsItemTypes.scissorsItemType
  ];

  it('getRandomRockPaperScissorsItem, should return random rock paper scissors item',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        playerSelectionOptions.forEach(
          (rockPaperScissorsItem: RockPaperScissorsItemInterface) => {
            if (rockPaperScissorsItem === {name: 'Rock', value: 1}) {
              expect(randomRockPaperScissorsItemGenerator
                .getRandomRockPaperScissorsItem(playerSelectionOptions)).toBe(rockPaperScissorsItem);
            }
            if (rockPaperScissorsItem === {name: 'Paper', value: 2}) {
              expect(randomRockPaperScissorsItemGenerator
                .getRandomRockPaperScissorsItem(playerSelectionOptions)).toBe(rockPaperScissorsItem);
            }
            if (rockPaperScissorsItem === {name: 'Scissors', value: 3}) {
              expect(randomRockPaperScissorsItemGenerator
                .getRandomRockPaperScissorsItem(playerSelectionOptions)).toBe(rockPaperScissorsItem);
            }
          });
      })
    ));
});
