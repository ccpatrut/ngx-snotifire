# Configuration

> `SnotifireConfig` - changes toasts configuration.  
> `SnotifireConfig` - changes toast dock configuration.

## Setting default configuration

> Default configuration looks like this - [toastDefaults](https://github.com/ccpatrut/ngx-snotifire/blob/main/projects/ngx-snotifire/src/lib/defaults/toast-defaults.ts)  
> Of course you can use it like json, just omit imports, and replace `SnotifireEventType` & `SnotificationPositionType` with string values.
> Just be sure that you are follow [SnotifireDefaults](interfaces.md#snotifiredefaults) interface.  
> You should initialize `ngx-snotifire` with default configuration object.  
> We provide it by custom object injection ` { provide: 'SnotifireConfig', useValue: ToastDefaults }` by default.

###### Example

```typescript
import {
  NgxSnotifireModule,
  SnotifireService,
  ToastDefaults,
} from "ngx-snotifire";
@NgModule({
  declarations: [AppComponent],
  imports: [NgxSnotifireModule],
  providers: [
    { provide: "SnotifireConfig", useValue: ToastDefaults },
    SnotifireService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

> If you want to change default config in runtime you can use [service.setDefaults()](snotify.md#setdefaults) method

## SnotifireConfig

### timeout

- type: `number`
- default: `2000`
  > Toast timeout in milliseconds. 0 - Disable timeout

### showProgressBar

- type: `boolean`
- default: `true`
  > Enable/Disable progress bar. Disabled by default if timeout is 0.

### type

- type: [SnotifireType](types.md#snotifiretype)
  > Depends on toast type - success | async | error | etc...
  > Actually it changes only toast class name

### closeOnClick

- type: `boolean`
- default: `true`
  > Enable/Disable close action by clicking on toast

### pauseOnHover

- type: `boolean`
- default: `true`
  > Enable/Disable pause on hover action

### buttons

- type: [ButtonsConfig[]](interfaces.md#snotifirebutton)
- default:
  ```typescript
  [
    { text: "Ok", action: null, bold: true },
    { text: "Cancel", action: null, bold: false },
  ];
  ```
  > Buttons config for Confirmation & Prompt types
  > You can pass, unlimited number of buttons. Just be sure you can handle it)

### placeholder

- type: `string`
- default: `"Enter answer here..."`
  > Placeholder for Prompt toast

### titleMaxLength

- type: `number`
- default: `16`
  > Toast title maximum length

### bodyMaxLength

- type: `number`
- default: `150`
  > Toast body maximum length

### icon

- type: `string`
- default: `null`
  > Custom icon url.
  ```js
  const icon = `https://placehold.it/48x100`;
  vm.$snotify.simple("Example body", null, {
    icon: icon,
  });
  ```

### iconClass

- type: `string`
- default: `null`
  > Custom icon class.

### backdrop

- type: `number`
- default: `-1`
  > Backdrop opacity in range from `0.0` to `1.0`.
  > Disabled `-1`

### animation

- type: [SnotifireAnimate](interfaces.md#snotifireanimate)
- default: `{enter: 'fadeIn', exit: 'fadeOut', time: 400}`

  ```
  > Animation configuration object. Time in milliseconds

  ```

### html

- type: `string`
- default: `null`
  > Toast inner html. When set, overrides toast content.

### position

- type: [SnotificationPositionType](enums.md#snotificationpositiontype)
- default: `rightBottom`
  > Toasts position on screen

## SnotifireGlobalConfig

### maxOnScreen

- type: `number`
- default: `8`
  > Max toast items on screen.  
  > For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.  
  > With this option, 8 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.

### maxAtPosition

- type: `number`
- default: `8`
  > Max toast items at position.  
  >  Same as `maxOnScreen` but affects only current toast position block.

### newOnTop

- type: `true`
- default: `150`
  > Should new items come from top or bottom side.  
  > This option created for styling purposes.  
  > For example, if your toast position is TOP-RIGHT. It's not very nice, when items comes from top and pulls down all other toasts
