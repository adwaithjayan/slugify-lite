export function slugifyLite(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove non-word characters
    .trim()
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/-+/g, "-"); // collapse multiple dashes
}
