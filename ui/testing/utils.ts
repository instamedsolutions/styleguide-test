type hasClassNameType = (listClass?: string, classname?: string) => boolean;

export const hasClassName: hasClassNameType = (listClass, classname) => {
  if (!listClass || !classname) {
    return false;
  }

  return listClass.split(' ').includes(classname);
};
