import * as objectpath from 'object-path';

function getDefaultValue(value, defaultValue) {
  if (undefined === value || null === value) {
    return defaultValue;
  }
  return value;
}

export function isPlainObject(item: unknown): item is Record<keyof any, unknown> {
  return (
    item !== null &&
    typeof item === 'object' &&
    // TS thinks `item is possibly null` even though this was our first guard.
    // @ts-expect-error
    item.constructor === Object
  );
}

export interface DeepmergeOptions {
  /**
   * 是否是克隆默认为true
   */
  clone?: boolean;
}

export class ObjectUtils {

  /**
   * 深度合并对象
   * @param target 目标对象
   * @param source 源对象
   * @param options 选项
   */
  static deepmerge<T>(target: T, source: unknown, options: DeepmergeOptions = { clone: true }): T {
    const output = options.clone ? { ...target } : target;

    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach((key) => {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }
        if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
          // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
          (output as Record<keyof any, unknown>)[key] = ObjectUtils.deepmerge(target[key], source[key], options);
        } else {
          (output as Record<keyof any, unknown>)[key] = source[key];
        }
      });
    }

    return output;
  }

  /**
   * 从对象中获取指定key的值
   * @param obj 原始对象
   * @param keys 要获取的key
   * @param defaultValue 默认值
   */
  static getValue(obj, keys: Array<string> | string, defaultValue = '-'): Array<any> | any {
    if (Array.isArray(keys)) {
      return keys.map(key => getDefaultValue(objectpath.get(obj, key), defaultValue));
    }
    return getDefaultValue(objectpath.get(obj, keys), defaultValue);
  }

  /**
   * 向对象中添加值
   * @param obj 要加值的对象
   * @param key 对象的path路径
   * @param value 值
   */
  static setValue(obj, key, value): void {
    objectpath.set(obj, key, value);
  }

  static delValue(obj, key): void {
    objectpath.del(obj, key);
  }

  /**
   * 去除对象空元素
   * @param obj
   * @returns {{}}
   */
  static removeNonValue(obj) {
    let newObject = {};
    Object.keys(obj).forEach(key => {
      //如果对象属性的值不为空，就保存该属性（这里我做了限制，如果属性的值为0，保存该属性。如果属性的值全部是空格，属于为空。）
      if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
        //记录属性
        newObject[key] = obj[key];
      }
    });
    //返回对象
    return newObject;
  }
}
