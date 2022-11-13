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

> Events type - [SnotifyEvent](types.md#snotifyevent)

```js
toast.on("click", (toast: Snotify) => {
  toast.body = "Change body...";
});
```
