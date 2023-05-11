/**
 * 백준 11004 문제 - https://www.acmicpc.net/problem/11004
 *
 * 문제
 * 수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때, 앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.
 *
 * 입력
 * 5 2
 * 4 1 2 3 5
 *
 * 출력
 * 2
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [_, k] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);
console.log(nums[k - 1]);
