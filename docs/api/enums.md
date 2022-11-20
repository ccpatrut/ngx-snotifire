# Enumerators

> Each enum can be imported from `ngx-snotifire`

### SnotificationPositionType

- LEFT_TOP = 'leftTop',
- LEFT_CENTER = 'leftCenter',
- LEFT_BOTTOM = 'leftBottom',
- RIGHT_TOP = 'rightTop',
- RIGHT_CENTER = 'rightCenter',
- RIGHT_BOTTOM = 'rightBottom',
- CENTER_TOP = 'centerTop',
- CENTER_CENTER = 'centerCenter',
- CENTER_BOTTOM = 'centerBottom',

### SnotifireType

- SUCCESS = 'success',
- INFO = 'info',
- WARNING = 'warning',
- ERROR = 'error',
- ASYNC = 'async',
- CONFIRM = 'confirm',
- PROMPT = 'prompt',

###### Example

```typescript
import { SnotificationPositionType, SnotifireType } from "ngx-snotify";

snotifireService.create({
  title: "Example title",
  body: null,
  config: {
    position: SnotificationPositionType.rightTop,
    type: SnotifireType.info,
  },
});
```
