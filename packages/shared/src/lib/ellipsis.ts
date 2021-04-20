/**
 * Truncate string upto truncate length
 *
 * @param txt input text
 * @param truncate_len text truncate length
 */
export const ellipsis = (txt: string, truncate_len = 100): string => {
  if (txt.length > truncate_len) {
    return txt.substr(0, truncate_len) + "...Read More";
  }
  return txt;
};
