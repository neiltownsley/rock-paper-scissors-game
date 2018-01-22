import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {RockPaperScissorsComponent} from './rock-paper-scissors.component';
import {RandomRockPaperScissorsItemGenerator} from '../shared/rock-paper-scissors/random.rock.paper.scisscors.iterm.generator';
import {By} from '@angular/platform-browser';
import {WinningPlayerCalculator} from '../shared/rock-paper-scissors/winning.player.calculator';
import {DebugElement} from '@angular/core';
import {RockPaperScissorsItemTypes} from "../shared/rock-paper-scissors/rock.paper.scissors.item.types";

describe('RockPaperScissorsComponent', () => {
  let component: RockPaperScissorsComponent;
  let fixture: ComponentFixture<RockPaperScissorsComponent>;
  let rockButton: DebugElement;
  let paperButton: DebugElement;
  let scissorsButton: DebugElement;
  let playerTitle: DebugElement;
  let computerTitle: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RockPaperScissorsComponent],
      providers: [WinningPlayerCalculator, RandomRockPaperScissorsItemGenerator]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    rockButton = fixture.debugElement.query(By.css('#Rock'));
    paperButton = fixture.debugElement.query(By.css('#Paper'));
    scissorsButton = fixture.debugElement.query(By.css('#Scissors'));
    playerTitle = fixture.debugElement.query(By.css('#playerTitle'));
    computerTitle = fixture.debugElement.query(By.css('#computerTitle'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit, should render player 1 buttons and default content', () => {
    component.ngOnInit();
    expect(rockButton.nativeElement.textContent).toEqual(RockPaperScissorsItemTypes.rockItemType.name);
    expect(paperButton.nativeElement.textContent).toEqual(RockPaperScissorsItemTypes.paperItemType.name);
    expect(scissorsButton.nativeElement.textContent).toEqual(RockPaperScissorsItemTypes.scissorsItemType.name);
    expect(playerTitle.nativeElement.textContent).toEqual('Player 1');
    expect(computerTitle.nativeElement.textContent).toEqual('Computer');
  });

  it('when player 1 selects rock and computer selects paper, computer wins', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.paperItemType;
        });

      rockButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Computer wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Rock');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Paper');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));


  it('when player 1 selects paper and computer selects rock, player 1 wins', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.rockItemType;
        });

      paperButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Player 1 wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Paper');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Rock');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects scissors and computer selects rock, computer wins', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.rockItemType;
        });

      scissorsButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Computer wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Scissors');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Rock');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects rock and computer selects scissors, player 1 wins', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.scissorsItemType;
        });

      rockButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Player 1 wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Rock');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Scissors');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects paper and computer selects scissors, computer wins', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.scissorsItemType;
        });

      paperButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Computer wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Paper');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Scissors');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects scissors and computer selects paper, player 1 wins', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.paperItemType;
        });

      scissorsButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Player 1 wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Scissors');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Paper');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects scissors and computer selects scissors, nobody wins, its a draw', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.scissorsItemType;
        });

      scissorsButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Its a Draw!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Scissors');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Scissors');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects rock and computer selects rock, nobody wins, its a draw', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.rockItemType;
        });

      rockButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Its a Draw!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Rock');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Rock');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));

  it('when player 1 selects paper and computer selects paper, nobody wins, its a draw', async(inject(
    [RandomRockPaperScissorsItemGenerator],
    (randomRockPaperScissorsItemGenerator: RandomRockPaperScissorsItemGenerator) => {
      component.ngOnInit();

      spyOn(randomRockPaperScissorsItemGenerator, 'getRandomRockPaperScissorsItem').and.callFake(
        () => {
          return RockPaperScissorsItemTypes.paperItemType;
        });

      paperButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Its a Draw!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player 1 choice: Paper');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Paper');
      expect(randomRockPaperScissorsItemGenerator.getRandomRockPaperScissorsItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
    })
  ));


});
