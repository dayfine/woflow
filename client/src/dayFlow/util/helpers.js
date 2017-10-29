export const formatHour = num => {
  switch (true) {
    case num === 0:
      return '12AM'
    case num < 12 && num > 0 :
      return `${num}AM`
    case num === 12:
      return '12PM'
    case num > 12:
      return `${num - 12}PM`
  }
}
