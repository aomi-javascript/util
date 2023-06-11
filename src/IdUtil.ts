/**
 * MongoDB Id 生成方案
 */
export class MongoId {
  /**
   * 机器码
   * @private
   */
  private readonly machineId = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
  /**
   * PID
   * @private
   */
  private readonly processId = Math.floor(Math.random() * 32767).toString(16).padStart(4, '0');

  private counter = Math.floor(Math.random() * 16777216);


  generate() {
    const timestamp = (new Date().getTime() / 1000).toString(16);
    const counter = this.counter.toString(16).padStart(6, '0');
    this.counter++;
    return `${timestamp}${this.machineId}${this.processId}${counter}`;
  }
}

export const mongoId = new MongoId()
