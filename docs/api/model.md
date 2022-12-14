# Toast Model

## SnotifireToastModel

### on

- type: `Function`t

Signature:

    ```
    (
     event: SnotifireEventType,
      action: (toast: this) => void
    ) => this
    ```

> Subscribing to toast events.  
> Unsubscribing automatically when toast destroyed

### value

- type: `string` _readonly_
- default: `''`
  > It is defined only if toast type === `prompt`. Another case it stays `undefined`

### valid

- type: `boolean`
- default: `undefined`
  > Finds out if toast is valid or not.  
  > Helper class to support `prompt` input validation.  
  > Apply `snotifyToast--valid` or `snotifyToast--invalid` class names

### id

- type: `number`
- default: `<Automatically generated value>`
  > SnotifyService automatically generates this uuid

### title

- type: `string`
- default: `null`
  > Toast title

### body

- type: `string`
- default: `null`
  > Body text content

### config

- type: [SnotifireConfig](options.md#snotifireconfig)
- default: `<Automatically generated value>`
  > Merges [default config](options.md#setting-default-configuration) with toast type config
