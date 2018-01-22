import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RockPaperScissorsComponent} from './rock-paper-scissors/rock-paper-scissors.component';
import {routingMap} from './app.routes';
import {WinningPlayerCalculator} from './shared/rock-paper-scissors/winning.player.calculator';
import {RandomRockPaperScissorsItemGenerator} from './shared/rock-paper-scissors/random.rock.paper.scisscors.iterm.generator';


@NgModule({
  declarations: [
    AppComponent,
    RockPaperScissorsComponent
  ],
  imports: [
    BrowserModule,
    routingMap,
  ],
  providers: [
    WinningPlayerCalculator,
    RandomRockPaperScissorsItemGenerator
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
