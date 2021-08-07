export default function heroHealth(hero) {
  return hero.sort((a, b) => b.health - a.health);
}
