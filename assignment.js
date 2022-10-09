function birdsfreq(arr) {
  const mymap = new Map();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const element = arr[i];
    if (mymap.get(element) == null) {
      mymap.set(element, 1);
    } else {
      mymap.set(element, mymap.get(element) + 1);
    }
  }
  let most = 0;
  let least = mymap.values().next().value;
  let mostint;
  let leastint = mymap.keys().next().value;

  for (let [key, value] of mymap) {
    if (value > most) {
      most = value;
      mostint = key;
    }
  }
  for (let [key, value] of mymap) {
    if (least > value) {
      least = value;
      leastint = key;
    }
  }
  let sol = { mostint, leastint };
  return sol;
}
function main() {
  const arr = [1, 2, 2, 4, 4, 4, 4, 5];
  let ans = birdsfreq(arr);
  console.log(ans);
}
main();
