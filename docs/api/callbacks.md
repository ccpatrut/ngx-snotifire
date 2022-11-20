# Callbacks

## toast.on( event, callback )

> You can chain callbacks `on(e, func).on(e, func)...`

### Callback

- type: `Function`

  Signature:

  ```
  (toast: Snotify) => void
  ```

  > [Snotifire](interfaces.md#snotifire)

# Events

- `"mounted"`
- `"beforeShow"`
- `"shown"`
- `"input"`
- `"click"`
- `"mouseenter"`
- `"mouseleave"`
- `"beforeHide"`
- `"hidden"`
- `"destroyed"`

> Events type - [SnotifireEventType](types.md#snotifyevent)

```js
toast.on("click", (toast: SnotifireEventType) => {
  toast.body = "Change body...";
});
```
