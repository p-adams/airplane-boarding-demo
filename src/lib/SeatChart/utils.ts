export function* range({ start = 0, limit, exclude }: RRange) {
  for (let i = start; i <= limit; ++i) {
    const ex = exclude.find((el) => el === i);
    if (!ex) yield i;
  }
}
