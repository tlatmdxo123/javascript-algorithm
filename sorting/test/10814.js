/**
 * 백준 18870 문제 - https://www.acmicpc.net/problem/10814
 *
 * 문제
 * 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
 *
 * 입력
 * 3
 * 21 Junkyu
 * 21 Dohyun
 * 20 Sunyoung
 *
 * 출력
 * 20 Sunyoung
 * 21 Junkyu
 * 21 Dohyun
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" "));
}

arr.sort((p1, p2) => {
  if (p1[0] < p2[0]) return -1;
  else return 0;
});

console.log(arr.map((p) => p.join(" ")).join("\n"));
