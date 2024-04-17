export const isNewsBackground = (key, tab) => {
  return (key) % 3 === 2 && tab === "news";
};
