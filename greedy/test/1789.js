/**
 * 백준 1789 문제 - https://www.acmicpc.net/problem/1789
 *
 * 문제
 * 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?
 *
 * 입력
 * 200
 *
 * 출력
 * 19
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];

let sum = 0;
let i = 1;
while (sum + i <= n) {
  sum = i + sum;
  i++;
}

console.log(i - 1);
