import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'pomodoro-timer',
	template: `
		<h1>{{minutes}}:{{seconds}}</h1>
		<p>
			<button (click)="togglePause()">
				{{ buttonLabel }}
			</button>
		</p>
	`
})
class PomodoroTimerComponent {
	minutes: number;
	seconds: number;

	constructor() {
		this.resetPomodoro();
		setInterval(() => this.tick(), 1000);
	}

	resetPomodoro(): void {
		this.minutes = 24;
		this.seconds = 59;
	}

	private tick(): void {
	  if (--this.seconds < 0) {
	    this.seconds = 59;
	    if (--this.minutes < 0) {
	      this.minutes = 24;
	      this.seconds = 59;
	    }
	  }
	}
}

bootstrap(PomodoroTimerComponent);