import {async, inject, TestBed} from '@angular/core/testing';
import {RandomRockPaperScissorsItemGenerator} from './random.rock.paper.scissors.item.generator';
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


  it('getRandomRockPaperScissorsItem, should return rock item type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(() => {
          return RockPaperScissorsItemTypes.rockItemType;
        });

        expect(randomRockPaperScissorsItemGenerator
          .getRandomRockPaperScissorsItem(playerSelectionOptions))
          .toBe(RockPaperScissorsItemTypes.rockItemType);
      })
    ));

  it('getRandomRockPaperScissorsItem, should return paper item type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(() => {
          return RockPaperScissorsItemTypes.paperItemType;
        });

        expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions))
          .toBe(RockPaperScissorsItemTypes.paperItemType);
      })
    ));

  it('getRandomRockPaperScissorsItem, should return scissors item type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(() => {
          return RockPaperScissorsItemTypes.scissorsItemType;
        });

        expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions))
          .toBe(RockPaperScissorsItemTypes.scissorsItemType);
      })
    ));
});
