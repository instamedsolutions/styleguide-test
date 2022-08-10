import scrollParent from 'vanillajs-browser-helpers/scrollParent';

export type ParentsScrollType = HTMLElement[];
export type GetScrollParentsType = (elm: HTMLElement ) => ParentsScrollType;

const getScrollParents:GetScrollParentsType = (elm) => {
  const parents = [];
  let p = elm;

  while (p) {
    p = scrollParent(p) as HTMLElement;

    if (!p || p === document.body || p.nodeName === 'HTML') {
      //@TODO use window ?
      parents.push(document.body);
      break;
    }

    parents.push(p);
  }

  return parents;
};

export default getScrollParents;
