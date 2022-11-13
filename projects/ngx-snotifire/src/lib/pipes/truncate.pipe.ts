import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})

/**
 * Truncate toast text pipe
 */
export class TruncatePipe implements PipeTransform {
  private readonly DEFAULT_LIMIT = 40;
  private readonly DEFAULT_TRAIL = '...';
  transform(value: string, ...args: Array<any>): any {
    const limit = args.length > 0 ? parseInt(args[0], 10) : this.DEFAULT_LIMIT;

    return value.length > limit
      ? value.substring(0, limit) +
          (args.length > 1 ? args[1] : this.DEFAULT_TRAIL)
      : value;
  }
}
