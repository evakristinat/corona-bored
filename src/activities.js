//Store ei ole tähän tarkoitukseen tarpeellinen, koska tätä tietoa tarvitsee vain yksi komponentti,
//mutta halusin näyttää, että storen käyttö onnistuu.

import { writable } from 'svelte/store';

export const activities = writable([]);

const customActivities = {
  subscribe: activities.subscribe,
  add: (a) => {
    activities.set(a);
  },
  clear: () => activities.set([]),
};

export default customActivities;
