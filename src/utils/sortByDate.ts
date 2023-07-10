import { IContent } from "../templates/types";

/** Returns a copy of the list ordered from the newest to the oldest item. */
export function sortByDate(items: IContent[]): IContent[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
