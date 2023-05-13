/**
 * 백준 18870 문제 - https://www.acmicpc.net/problem/18870
 *
 * 문제
 * 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
 * Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
 * X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
 *
 * 입력
 * 5
 * 2 4 -10 4 -9
 *
 * 출력
 * 2 3 0 3 1
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const words = input[1].split(" ");

const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(words[i]);
}

const sorted = [...new Set(arr)].sort((a, b) => a - b);
const map = {};
sorted.forEach((n, i) => (map[n] = i));
const result = arr.map((n) => map[n]);

console.log(result.join(" "));
