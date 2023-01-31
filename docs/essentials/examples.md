# Examples

### Toasts

#### Simple, Success, Info, Warning, Error

```typescript
service.success("Example body content");
service.success("Example body content", "Example Title");
service.success("Example body content", {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
});
service.success("Example body content", "Example title", {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
});
```

#### Async

###### Success

You should pass Promise of type Snotify to change some data or do some other actions

```typescript
const successAction = Observable.create((observer) => {
  setTimeout(() => {
    observer.next({
      body: "Still loading.....",
    });
  }, 2000);

  setTimeout(() => {
    observer.next({
      title: "Success",
      body: "Example. Data loaded!",
      config: {
        closeOnClick: true,
        timeout: 5000,
        showProgressBar: true,
      },
    });
    observer.complete();
  }, 5000);
});

this.snotifireService.async(
  "This will resolve with success",
  successAction,
  config
).subscribe();
```
Susbcription is needed, this makes it advantageous to pipe the snotifire service in a http interceptor. 
For instance:

```typescript
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnotifireModel, SnotifireService, SnotifireType } from 'ngx-snotifire';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SnotifireIntercetor implements HttpInterceptor {
  constructor(private readonly snotifireService: SnotifireService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const paths = ['/api'];
    if (
      paths.some((path) => req.url.startsWith(path) && req.method === 'POST')
    ) {
      return this.snotifireService.async(
        'Processing ',
        next
          .handle(req)
          .pipe(
            map(
              (httpEvent) =>
                new SnotifireModel(
                  SnotifireType.INFO,
                  'Processed ',
                  'Saved successfully',
                  { showProgressBar: true, timeout: 3000, closeOnClick: true }
                )
            )
          )
      );
    }
    return next.handle(req);
  }
}


```

###### Error

```typescript
const errorAction = Observable.create((observer) => {
  setTimeout(() => {
    observer.error({
      title: "Error",
      body: "Example. Error 404. Service not found",
    });
  }, 2000);
});

service.async("This will resolve with error", "Async", errorAction);
```

#### Prompt & Validation

```typescript
const yesAction = (toast: SnotifireToastModel) => {
  if (!toast.value.match("snotify")) {
    toast.valid = false;
    return false;
  } else {
    toast.valid = true; // default value
    service.remove(toast.id);
  }
};

const noAction = (toast: SnotifireToastModel) => {
  service.remove(toast.id); // default
};

service.prompt("Example body content", "Example title", {
  buttons: [
    { text: "Yes", action: yesAction, bold: true },
    { text: "No", action: noAction },
  ],
  placeholder: "This is the example placeholder which you can pass",
});
```

#### Confirm

```typescript
service.confirm("Example body content", "Example title", {
  timeout: 5000,
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  buttons: [
    { text: "Yes", action: () => console.log("Clicked: Yes"), bold: false },
    { text: "No", action: () => console.log("Clicked: No") },
    {
      text: "Later",
      action: (toast) => {
        console.log("Clicked: Later");
        service.remove(toast.id);
      },
    },
    {
      text: "Close",
      action: (toast) => {
        console.log("Clicked: No");
        service.remove(toast.id);
      },
      bold: true,
    },
  ],
});
```

#### Html

```typescript
service.html(
  `<div class="snotifyToast__title"><b>Html Bold Title</b></div>
  <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div> `,
  {
    timeout: 5000,
    showProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
  }
);
```

### Callbacks

```typescript
toast.on("mounted", (toast) => {
  console.log("[CALLBACK]: mounted", toast);
});

toast.on("input", (toast) => {
  if (!toast.value.match("snotify")) {
    toast.valid = false;
    return false;
  } else {
    toast.valid = true; // default value
    service.remove(toast.id);
  }
});
```

### Custom icon

Icon viewport is set to 48x48 pixels.

```javascript
service.simple("Example body content", "Example title!", {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: true,
  icon: "assets/custom-svg.svg",
});
```

Of course you can pass an url, for example `http://placeholde.it/48x100` (this resource will generate us an image with 48x100 dimension).  
And apply `object-fit` to `.snotifire-icon` class in your styles

```scss
.snotifire-icon {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
}
```
