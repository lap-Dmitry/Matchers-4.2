/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function heroHealth(hero) {
  return hero.sort((a, b) => b.health - a.health);
}
