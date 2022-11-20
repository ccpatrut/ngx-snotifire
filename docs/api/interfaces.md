# Interfaces

### Snotifire

### title

- type: `string`
  > Toast title

### body

- type: `string`
  > Toast content

### config

- type: [SnotifireConfig](options.md/#SnotifireConfig)
  > Toast configuration object

### html

- type: `string` | [SafeHtml](https://angular.io/api/platform-browser/SafeHtml)
  > Toast html content inside `.snotifyToast__inner`

## SnotifireButton

### text

- type: `string`
  > Button text

### action

- type: `function`

  Signature:

  ```
  (
    toast: SnotifireModel
  ) => void
  ```

> Callback action which will be called on button click.  
> Receive [SnotifireModel](model.md#SnotifireToastModel)

### bold

- type: `boolean`
  > Should button text be bold or not

### SnotifireAnimate

### enter

- type: `string`
  > In animation name

### exit

- type: `string`
  > Out animation name

### time

- type: `number`
  > Animation time in ms

### SnotifyDefaults

### global

- type: [SnotifireGlobalConfig](options.md#snotifireglobalconfig)
  > Notifications dock config

### toast

- type: [SnotifireToastConfig](options.md/#snotifiretoastconfig)
  > Toast config

### type

- type: `{ [key: SnotifireType]: SnotifireToastConfig }`
  > Toast type default config  
  > Example can be found in [options](options.md#setting-default-configuration) defaults

### SnotifireStyle

> Append snotify-${name} class name to snotify element

### simple

- type: [SnotifireType](types.md#snotifiretype)

### success

- type: [SnotifireType](types.md#snotifiretype)

### error

- type: [SnotifireType](types.md#snotifiretype)

### warning

- type: [SnotifireType](types.md#snotifiretype)

### info

- type: [SnotifireType](types.md#snotifiretype)

### async

- type: [SnotifireType](types.md#snotifiretype)

### confirm

- type: [SnotifireType](types.md#snotifiretype)

### prompt

- type: [SnotifireType](types.md#snotifiretype)
