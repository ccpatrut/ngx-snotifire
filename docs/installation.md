# Installation

###### NPM 5

`npm install ng-snotify`

###### yarn

`yarn add ng-snotify`

#### Import Module

Import SnotifyModule, also you can try SnotifyModule.forRoot() if you have build errors  
And provide SnotifyService with default configuration object

> How to change ToastDefaults config - [options](api/snotify.md#setdefaults)

```typescript
// Import your library
import {
  NgxSnotifireModule,
  SnotificationService,
  ToastDefaults,
} from "ngx-snotifire";

@NgModule({
  imports: [BrowserModule, SnotifyModule],
  providers: [
    { provide: "NotifireConfig", useValue: ToastDefaults },
    SnotificationService,
  ],
})
export class AppModule {}
```

#### Add selector

Include `ngx-snotifire` component to you root component

```html
<ngx-snotifire></ngx-snotifire>
```

#### Dependency injection

Now you should inject `SnotifyService`

```typescript
import { SnotifyService } from "ng-snotify";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private snotificationService: SnotificationService) {}
}
```

#### Import Styles

You can find this information - [here](essentials/styling.md)
