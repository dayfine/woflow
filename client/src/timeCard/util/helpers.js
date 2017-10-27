export const formatSeconds = totalSeconds => {
  const
    timePad = n => n < 10 ? `0${n}` : n,
    seconds = timePad(totalSeconds % 60),
    minutes = timePad(Math.floor(totalSeconds / 60) % 60),
    hours = timePad(Math.floor(totalSeconds / 3600))

  return `${hours > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
