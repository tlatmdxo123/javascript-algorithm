/**
 * 백준 11650 문제 - https://www.acmicpc.net/problem/11650
 *
 * 문제
 * 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
 *
 * 입력
 * 5
 * 3 4
 * 1 1
 * 1 -1
 * 2 2
 * 3 3
 *
 * 출력
 * 1 -1
 * 1 1
 * 2 2
 * 3 3
 * 3 4
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const arr = input.splice(1);
const nums = arr.map((n) => n.split(" ").map(Number));

nums.sort((pos1, pos2) => {
  //x좌표 기준 오름차순 정렬
  if (pos1[0] !== pos2[0]) return pos1[0] - pos2[0];
  else pos1[1] - pos2[1]; //x좌표가 같을 경우 y좌표 기준으로 오름차순 정렬
});

console.log(nums.map((num) => num.join(" ")).join("\n"));
