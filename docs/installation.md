# Installation

###### NPM 5

`npm install ngx-snotifire`

###### yarn

`yarn add ngx-snotifire`

#### Import Module

Import NgxSnotifireModule, also you can try NgxSnotifireModule.forRoot() if you have build errors  
And provide SnotifireService with default configuration object

> How to change ToastDefaults config - [options](api/snotify.md#setdefaults)

```typescript
// Import your library
import {
  NgxSnotifireModule,
  SnotifireService,
  ToastDefaults,
} from "ngx-snotifire";

@NgModule({
  imports: [BrowserModule, NgxSnotifireModule],
  providers: [
    { provide: "NotifireConfig", useValue: ToastDefaults },
    SnotifireService,
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

Now you should inject `SnotifireService`

```typescript
import { SnotifireService } from "ngx-snotifire";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private snotifireService: SnotifireService) {}
}
```

#### Import Styles

You can find this information - [here](essentials/styling.md)
