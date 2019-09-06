/**
 * 
 * @param {*} wrapper 
 * @param {*} val 
 * @returns shallow wrapper
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}