/**
 * 백준 16953 문제 - https://www.acmicpc.net/problem/16953
 *
 * 문제
 * 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
 * 2를 곱한다.
 * 1을 수의 가장 오른쪽에 추가한다.
 *
 * A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.
 *
 * 입력
 * 2 162
 *
 * 출력
 * 5
 *
 * 2 → 4 → 8 → 81 → 162
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [a, b] = input[0].split(" ").map(Number);

let result = 1;
while (b > a) {
  const bArr = String(b).split("");
  const bLastNum = Number(bArr[bArr.length - 1]);
  if (b % 2 !== 0 && bLastNum !== 1) {
    break;
  }
  if (b % 2 === 0) b = b / 2;
  else if (bLastNum === 1) b = Number(bArr.splice(0, bArr.length - 1).join(""));
  result++;
}

console.log(b === a ? result : -1);
