/**
 * 滚动到指定的原始
 * @param name
 * @param options
 */
export function scrollIntoView(name, options?: boolean | ScrollIntoViewOptions) {
  const dom = document.getElementById(name);
  if (dom) {
    dom.scrollIntoView(options);
  }
}
