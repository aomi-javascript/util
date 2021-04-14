import moment from 'moment';

/**
 * 日期工具类
 */
export class MomentDateUtil {

  /**
   * 格式化时间
   * @param date 日期
   * @param format 格式
   */
  static format(date: moment.Moment | Date | number, format?: string) {
    if (typeof date === 'number' || date instanceof Date) {
      return moment(date).format(format);
    }
    return date.format(format);
  }

  /**
   * 判断一个日期是否大于等于今天
   * @param date 指定日期
   * @returns {boolean} true 大于 反之小于
   */
  static gteToday(date) {
    return date && date > moment().endOf('day')
  }

}
