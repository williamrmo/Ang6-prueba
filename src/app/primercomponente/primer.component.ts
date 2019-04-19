import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    // Metodo 1;
    // template: '<h1>Hola Mundo</h1>',
    // Metodo 2;
    // template: `
    // <div class="hi">
    //     <h1>Hola mi nombre es William Romero</h1>
    //     <p>Soy desarrollador web</p>
    //     <p>tengo 21 a&ntilde;os</p>
    // </div>
    // `,
    // Metodo 3;
    templateUrl: './primer.component.html',
    // Metodo 1 css
    // styles: ['.hi { background: black; color: white; }']
    styleUrls: ['./primer.component.css']
})

export class HelloWorld {
    title = 'Welcome to angular';
}