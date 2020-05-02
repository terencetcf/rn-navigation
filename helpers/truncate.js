export const truncate = (value, length) =>
  value.length > length ? `${value.substring(0, length)}...` : value;
