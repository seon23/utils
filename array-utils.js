export const range = (start, end, step) => {
  const result = [];

  // if (end === undefined) { ... }
  const tmp = start;
  end = end ?? (start > 0 ? ((start = 1), tmp) : start === 0 ? 0 : -1);

  step = step ?? (start > end ? -1 : 1);

  // if ((start > end && step > 0) || (start < end && step < 0)) return result;
  if ((start - end) * step > 0) {
    return result;
  }

  if (start === end || step === 0) {
    return [start];
  }

  //   const until = (i) => (start > end ? i <= end : i >= end);
  for (let i = start; ; i += step) {
    result.push(i);

    if (Math.abs(i - end) < Math.abs(step)) {
      break;
    }
  }
  return result;
};
