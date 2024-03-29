const tabsHendlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

for (const tab of tabsHendlerElems) {
  tab.addEventListener('click', () => {
    tabsHendlerElems.forEach(item => {
      if (tab === item) {
        item.classList.add('design-list__item_active');
      } else {
        item.classList.remove('design-list__item_active');
      }
    });

    tabsFieldElems.forEach(item => {
      if (item.dataset.tabsField === tab.dataset.tabsHandler) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    })
  });
}