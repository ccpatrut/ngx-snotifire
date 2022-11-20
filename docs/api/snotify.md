# NotificationService

> All methods return toast [NotifireToastModel](model.md#snotifiretoastmodel)
> Toast methods creates notifications with different class names `.snotify-${METHOD_NAME}`  
> You can style them as you want.
> Look more in [advanced section].

## Core

### simple

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

### success

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

### info

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

### warning

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

### error

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

### confirm

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

  > Toast notification with buttons  
  > Example - [here](../essentials/examples.md#confirm)

### prompt

- type: `Function`

  Signature:

  ```
  (body: string): SnotifireToastModel
  (body: string, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string): SnotifireToastModel
  (body: string, title: string, config: SnotifireConfig): SnotifireToastModel
  ```

  > Toast notification with buttons and input field
  > Example - [here](../essentials/examples.md#prompt)

### async

- type: `Function`

  Signature:

  ```
  (body: string, action: Promise<SnotifireModel> | Observable<SnotifireModel>): SnotifireToastModel
  (body: string, title: string, action: Promise<SnotifireModel> | Observable<SnotifireModel>): SnotifireToastModel
  (body: string, action: Promise<SnotifireModel> | Observable<SnotifireModel>, config: SnotifireConfig): SnotifireToastModel
  (body: string, title: string, action: Promise<SnotifireModel> | Observable<SnotifireModel>, config: SnotifireConfig): SnotifireToastModel
  ```

  > Toast notification of style - _info_ and loading spinner. It changes style depending on complete or error `Observable`.  
  > Example - [here](../essentials/examples.md#async)

### html

- type: `Function`

  Signature:

  ```
   html(html: string | SafeHtml, config?: SnotifireConfig): SnotifireToastModel
  ```

  > Toast notification of custom style(default - Simple).
  > Renders your html string inside `.notifire-toast__inner`
  > Example - [here](../essentials/examples.md#html)

## Other

### setDefaults

- type: `Function`

  Signature:

  ```
  (
    defaults: SnotifireDefaults
  ) => SnotifireDefaults
  ```

  > Set global configuration object

### get

- type: `Function`

  Signature:

  ```
  (
    id: number
  ) => SnotifireToastModel
  ```

  > [SnotifireToastModel](model.md#snotifiretoastmodel)
  > Returns SnotifireToastModel object by id

### remove

- type: `Function`

  Signature:

  ```
  (
    id?: number,
    remove?: boolean
  ) => void
  ```

  > If id passed, removes toast instantly.
  > If no param passed it's the same as [clear()](#clear).  
  > If you want to remove toast instantly pass `true` as second argument

### clear

- type: `Function`

  Signature:

  ```
  () => void
  ```

  > Clear notifications array instantly

### create

- type: `Function`

  Signature:

  ```
  (
  snotifire: SnotifireModel
  ) => SnotifireToastModel
  ```

  > [Snotifire](interfaces.md#snotifire) > [SnotifireToastModel](model.md#snotifiretoastmodel)
  > Creates custom notification object
