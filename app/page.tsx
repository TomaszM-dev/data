export default function Home() {
  const arr = [5, 7, 3, 0];

  arr.sort(compareNum);

  function compareNum(first, second) {
    return second - first;
  }
  console.log(arr);

  return <div>hello</div>;
}
