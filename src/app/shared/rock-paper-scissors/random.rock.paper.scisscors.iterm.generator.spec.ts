import {async, inject, TestBed} from '@angular/core/testing';
import {RandomRockPaperScissorsItemGenerator} from './random.rock.paper.scissors.item.generator';
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
            if (JSON.stringify(rockPaperScissorsItem) === RockPaperScissorsItemTypes.rockItemType) {
              expect(randomRockPaperScissorsItemGenerator
                .getRandomRockPaperScissorsItem(playerSelectionOptions)).toBe(rockPaperScissorsItem);
            }
            if (JSON.stringify(rockPaperScissorsItem) === RockPaperScissorsItemTypes.paperItemType) {
              expect(randomRockPaperScissorsItemGenerator
                .getRandomRockPaperScissorsItem(playerSelectionOptions)).toBe(rockPaperScissorsItem);
            }
            if (JSON.stringify(rockPaperScissorsItem) === RockPaperScissorsItemTypes.scissorsItemType) {
              expect(randomRockPaperScissorsItemGenerator
                .getRandomRockPaperScissorsItem(playerSelectionOptions)).toBe(rockPaperScissorsItem);
            }
          });
      })
    ));
});
