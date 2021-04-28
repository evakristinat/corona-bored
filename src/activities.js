//Store ei ole tähän tarkoitukseen tarpeellinen, eikä lisää mitään arvoa custom-storena,
//koska tätä tietoa tarvitsee vain yksi komponentti, eikä storen käsittelyyn tarvita omia
//metodeita, mutta halusin näyttää, että storen käyttö onnistuu.

import { writable } from 'svelte/store';

export const activities = writable([]);

const customActivities = {
  subscribe: activities.subscribe,
  add: (a) => {
    activities.set(a);
  },
};

export default customActivities;
