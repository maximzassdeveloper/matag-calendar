export const numberToTwo = (num: number) => {
  const strNum = num.toString()
  return strNum.length < 2 ? '0' + strNum : strNum
}