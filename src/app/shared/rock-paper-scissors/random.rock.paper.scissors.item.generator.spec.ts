import {async, inject, TestBed} from '@angular/core/testing';
import {RandomRockPaperScissorsItemGenerator} from './random.rock.paper.scissors.item.generator';
import {RockPaperScissorsItemTypes} from './rock.paper.scissors.item.types';
import {RockPaperScissorsItemInterface} from "./rock.paper.scissors.item.interface";

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

  it('getRandomRockPaperScissorsItem, should return RockPaperScissorsItemInterface type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        const randomRockPaperScissorsItem = randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions);
        expect(randomRockPaperScissorsItem.name).toEqual(jasmine.any(String));
        expect(randomRockPaperScissorsItem.value).toEqual(jasmine.any(Number));
      })
    ));


  it('getRandomRockPaperScissorsItem, was called with playerSelectionOptions',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem');
        randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions);
        expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem).toHaveBeenCalledWith(playerSelectionOptions);
      })
    ));


  it('getRandomRockPaperScissorsItem, should return rock item type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(() => {
          return RockPaperScissorsItemTypes.rockItemType;
        });

        const randomRockPaperScissorsItem = randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions);
        expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem).toHaveBeenCalledWith(playerSelectionOptions);
        expect(randomRockPaperScissorsItem).toBe(RockPaperScissorsItemTypes.rockItemType);
      })
    ));

  it('getRandomRockPaperScissorsItem, should return paper item type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(() => {
          return RockPaperScissorsItemTypes.paperItemType;
        });

        const randomRockPaperScissorsItem = randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions);
        expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem).toHaveBeenCalledWith(playerSelectionOptions);
        expect(randomRockPaperScissorsItem).toBe(RockPaperScissorsItemTypes.paperItemType);
      })
    ));

  it('getRandomRockPaperScissorsItem, should return scissors item type',
    async(inject([RandomRockPaperScissorsItemGenerator], (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
        spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(() => {
          return RockPaperScissorsItemTypes.scissorsItemType;
        });

        const randomRockPaperScissorsItem = randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem(playerSelectionOptions);
        expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem).toHaveBeenCalledWith(playerSelectionOptions);
        expect(randomRockPaperScissorsItem)
          .toBe(RockPaperScissorsItemTypes.scissorsItemType);
      })
    ));
});
