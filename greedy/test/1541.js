/**
 * 백준 1541 문제 - https://www.acmicpc.net/problem/1541
 *
 * 문제
 * 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
 * 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
 * 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
 *
 * 입력
 * 55-50+40
 *
 * 출력
 * -35
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const string = input[0];
const arr = string
  .split("-")
  .map((s) => s.split("+").reduce((prev, curr) => prev + Number(curr), 0));

const result = arr.reduce((prev, curr) => Number(prev) - Number(curr));
console.log(result);
