export const highlight = (str, keyword, className = 'highlight') => {
  const hl = `<span class="${className}">${keyword}</span>`;
  return str.replace(new RegExp(keyword, 'gi'), hl);
};

export const stripHtml = (html) => {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent;
};
