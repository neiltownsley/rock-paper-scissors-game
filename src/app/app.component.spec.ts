import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Title} from '@angular/platform-browser';

describe('AppComponent', () => {
  let title: Title;
  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
        imports: [RouterTestingModule]
      }).compileComponents();
    }));

  beforeEach(() => {
    title = TestBed.get(Title);
  });


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Rock Paper Scissors Game'`, async(() => {
    expect(title.getTitle()).toEqual('Rock, paper, scissors game');
  }));
});
