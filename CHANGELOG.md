## Change Log

### v1.0.0

- Migrating from artemsky on angular v14

### v19.0.0

- Angular 19 compatibility: updated to `@angular/core`, `@angular/cli`, and `@angular/material` v19.
- Library peers widened to support Angular `^16 || ^17 || ^18 || ^19` with `rxjs ^7`.
- Internal migrations: CLI builder migrated to `application` builder; standalone flags normalized by Angular schematics.
- Demo builds fine; Material theming warns about v19 theme API maps (color/typography/density). Styling remains functional.
- Docs: compodoc and GitBook can be rebuilt via workspace scripts.

### v19.1.0

- Migrated from deprecated `*ngIf`, `*ngFor`, `*ngSwitch` structural directives to Angular's built-in control flow (`@if`, `@for`, `@switch`).
- This ensures compatibility with Angular 22+ where the legacy directives will be removed.
