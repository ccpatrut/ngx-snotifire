import { SnotifireModel, SnotifireType } from '../models';

/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey NotificationType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export function SetToastType(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  return {
    value(...args: any[]) {
      (args[0] as SnotifireModel).config = {
        ...(args[0] as SnotifireModel).config,
        type: propertyKey as SnotifireType,
      };
      return descriptor.value.apply(this, args);
    },
  };
}
