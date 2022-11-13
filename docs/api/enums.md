# Enumerators

> Each enum can be imported from `ng-snotify`

### SnotificationPositionType

- leftTop:`"leftTop"`
- leftCenter:`"leftCenter"`
- leftBottom:`"leftBottom"`
- rightTop:`"rightTop"`
- rightCenter:`"rightCenter"`
- rightBottom:`"rightBottom"`
- centerTop:`"centerTop"`
- centerCenter:`"centerCenter"`
- centerBottom:`"centerBottom"`

### SnotifireType

- success:`"success"`
- error:`"error"`
- warning:`"warning"`
- info:`"info"`
- async:`"async"`
- confirm:`"confirm"`
- prompt:`"prompt"`

###### Example

```typescript
import { SnotificationPositionType, SnotifireType } from "ng-snotify";

snotifireService.create({
  title: "Example title",
  body: null,
  config: {
    position: SnotifyPosition.rightTop,
    type: SnotifyStyle.info,
  },
});
```
