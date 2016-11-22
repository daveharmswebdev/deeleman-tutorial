import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-angular',
    template: '<h1>{{greeting}}</h1>'
})

class HelloAngularComponent {
    greeting: String;
    constructor() {
        this.greeting = 'Hello Angular2!';
    }
}

bootstrap(HelloAngularComponent);