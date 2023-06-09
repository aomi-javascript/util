export class ArrayUtil {

  /**
   * 数组乱序
   * @param array 数组
   */
  static shuffle(array: Array<any>): Array<any> {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}
