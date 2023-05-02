export function when(condition: boolean, result: string | number) {
  return condition ? result : undefined;
}
