# Callbacks

## toast.on( event, callback )

> You can chain callbacks `on(e, func).on(e, func)...`

### Callback

- type: `Function`

  Signature:

  ```
  action: (toast: SnotifyToast) => void
  ```

  > [Snotifire](interfaces.md#snotifire)

# Events

MOUNTED = 'mounted',
BEFORE_SHOW = 'beforeShow',
SHOWN = 'shown',
INPUT = 'input',
CLICK = 'click',
MOUSE_ENTER = 'mouseenter',
MOUSE_LEAVE = 'mouseleave',
BEFORE_HIDE = 'beforeHide',
HIDDEN = 'hidden',
DESTROYED = 'destroyed',

> Events type - [SnotifyEvent](types.md#SnotifireEventType)

```js
toast.on("click", (toast: Snotify) => {
  toast.body = "Change body...";
});
```
