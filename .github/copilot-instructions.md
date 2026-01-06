# Copilot Instructions for ngx-snotifire

## Repo Overview
- Workspace contains a demo app (`snotifire-workspace`) and a publishable library (`projects/ngx-snotifire`).
- The library exposes `NgxSnotifireModule`, `SnotifireService`, `NgxSnotifireComponent`, and models/pipes/utilities via its public API.
- Demo shows real usage with Angular Material and theme switching.

## Architecture & Data Flow
- `SnotifireService` creates and manages `SnotifireToastModel` instances, maintains an in-memory queue, and emits updates via `emitter`, `toastChanged`, and `toastDeleted` (RxJS `Subject`s).
- Overloaded service methods (`success/info/error/warning/confirm/prompt/html/async`) are normalized by decorators:
  - `@TransformArgument` coerces multiple signatures into a `SnotifireModel` (and `action` for `async`).
  - `@SetToastType` sets `config.type` from the method name.
- `NgxSnotifireComponent` subscribes to `service.emitter`, groups toasts by `SnotificationPositionType`, slices per `global.maxOnScreen/maxAtPosition`, and manages the backdrop opacity.
- `ToastComponent` renders a single toast, runs progress/animation timing, reacts to hover/click, and calls `service.remove(id)` after timeout or on click.
- Defaults live in `ToastDefaults` and are deep-merged with call-time config via `mergeDeep`.

## Using the Library (app side)
- Import `NgxSnotifireModule` and provide defaults:
  - `{ provide: 'snotifireConfig', useValue: ToastDefaults }` (string token by design).
- Place the host component once near the app root: `<ngx-snotifire class="material"></ngx-snotifire>`; switch theme by changing the class (`material|dark|simple`).
- Common calls:
  - `snotifire.success(body, title?, config?)`
  - `snotifire.info/error/warning(...)`
  - `snotifire.confirm(body, title?, { buttons: [...] })`
  - `snotifire.prompt(body, title?, { buttons, placeholder })`
  - `snotifire.html('<b>custom</b>', config)`
  - `snotifire.async(body, [title,] action$, config?).subscribe()` (returns `Observable`; subscribe to execute)

## Styling & Themes
- Themes: `projects/ngx-snotifire/styles/{material,dark,simple}.scss` plus shared partials.
- Demo imports themes in `src/styles.scss` and applies them via a CSS class on `<ngx-snotifire>`.
- Animations use names in `config.animation.enter/exit` with `config.animation.time` (ms).

## Build, Test, Docs
- Dev server (demo): `npm start` → `ng serve` the `snotifire-workspace` app.
- Build library: `npm run lib:build:prod` (ng-packagr; outputs per `ng-package.json`).
- Tests: `npm test` runs both app and library Karma suites in ChromeHeadless with coverage.
- Docs: `npm run compodoc:build` (API docs to `demo/compodoc/`); `npm run docs:build` (GitBook to `demo/documentation/`).

## Conventions & Gotchas
- Config provider token is the string `'snotifireConfig'`; match it exactly.
- `global.newOnTop` flips list slicing; `global.filterDuplicates` blocks `equals()` duplicates (same `title/body/type`).
- Setting `timeout: 0` disables auto-dismiss and progress bar.
- `async` toasts: omit/override `timeout` and progress as needed; success/error style is applied when the stream completes/errors.
- `mergeDeep` expects plain objects; avoid arrays/functions in config.
- To remove a toast programmatically: `service.remove(toast.id)`; to clear all: `service.remove(0)` or `service.clear()`.
- **Control Flow**: Templates use Angular's built-in control flow (`@if`, `@for`, `@switch`) instead of deprecated `*ngIf`/`*ngFor`/`*ngSwitch`. This ensures compatibility with Angular 22+.