/**
 * The Solvere mark, as a component rather than an <img>.
 *
 * Two nested play triangles: the module, and the record kept inside it. Every
 * shape is one triangle (3,2 / 21,12 / 3,22) scaled about its incentre, so
 * redrawing the triangle moves the whole mark. Full geometry in /brand.
 *
 * `fill="currentColor"` resolves against the surrounding text colour, so one
 * file serves all three palettes with no theme check in JS and no flash of the
 * wrong asset on first paint.
 *
 * The ring and its hole are ONE path with two subpaths. Split them into
 * separate <path> elements and `evenodd` resolves per element, filling the
 * hole in solid.
 *
 * Size it with className (size-5); it carries none of its own.
 */
export function SolvereMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.377 3.321L18.482 10.601A1.6 1.6 0 0 1 18.482 13.399L5.377 20.679A1.6 1.6 0 0 1 3 19.281L3 4.719A1.6 1.6 0 0 1 5.377 3.321ZM6.537 6.482L15.054 11.213A0.9 0.9 0 0 1 15.054 12.787L6.537 17.518A0.9 0.9 0 0 1 5.2 16.732L5.2 7.268A0.9 0.9 0 0 1 6.537 6.482Z"
      />
      <path
        fill="currentColor"
        d="M7.64 8.696L12.486 11.388A0.7 0.7 0 0 1 12.486 12.612L7.64 15.304A0.7 0.7 0 0 1 6.6 14.692L6.6 9.308A0.7 0.7 0 0 1 7.64 8.696Z"
      />
    </svg>
  );
}

/**
 * Under 20px the 2.2-unit ring and the 1.4-unit gap land on less than a pixel
 * each and the mark closes into a smudge, so below that size it becomes one
 * solid play with a larger corner radius. Same triangle, same grid. Icons use
 * this at every size, because an icon is read at 16px more often than it is
 * drawn at 512.
 */
export function SolvereMarkCompact(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M6.268 3.816L17.538 10.077A2.2 2.2 0 0 1 17.538 13.923L6.268 20.184A2.2 2.2 0 0 1 3 18.261L3 5.739A2.2 2.2 0 0 1 6.268 3.816Z"
      />
    </svg>
  );
}
