export const openNewLink = (
  link: string,
  target?: "_blank" | "_self" | "_parent" | "_top"
): void => {
  window.open(link, target);
};
