import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div>
            <squeezebox [multiple]="false">
                <sb-item  *ngFor="let item of itemsList" (onToggled)="itemWasToggled($event)">
                    <sb-item-head>{{item.title}}</sb-item-head>
                    <sb-item-body>{{item.description}}</sb-item-body>
                </sb-item>
            </squeezebox>
        </div>

        <h3>Already expanded</h3>
        <div>
            <squeezebox [multiple]="false">
                <sb-item>
                    <sb-item-head>Item 1</sb-item-head>
                    <sb-item-body>Lorem ipsum dolor</sb-item-body>
                </sb-item>
                <sb-item [collapsed]="false">
                    <sb-item-head>Item 2</sb-item-head>
                    <sb-item-body>Lorem ipsum dolor</sb-item-body>
                </sb-item>
            </squeezebox>
        </div>
    `
})
export class AppComponent {
    
    private itemsList:Object[] = [
        {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
        },
        {
        title: 'Item 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
        }
    ]
    
    constructor() {
        
    }

    itemWasToggled(event) {
        console.log('collapsed:', event);
    }
    
}
