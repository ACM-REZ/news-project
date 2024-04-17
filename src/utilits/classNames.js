export const addModifier = (className, modifier) => {
  return className.concat(" ", modifier);
};

export const addModifierConditionally = (condition, className, modifier) => {
  if (condition) {
    return addModifier(className, modifier);
  } else {
    return className;
  }
};

export const addSingleModifier = (condition, modifier) => {
  if (condition) {
    return modifier;
  }
};
