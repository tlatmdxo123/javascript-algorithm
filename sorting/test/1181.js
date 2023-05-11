/**
 * 백준 1181 문제 - https://www.acmicpc.net/problem/1181
 *
 * 문제
 * 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
 *
 * 길이가 짧은 것부터
 * 길이가 같으면 사전 순으로
 * 단, 중복된 단어는 하나만 남기고 제거해야 한다.
 *
 * 입력
 * 13
 * but
 * i
 * wont
 * hesitate
 * no
 * more
 * no
 * more
 * it
 * cannot
 * wait
 * im
 * yours
 *
 * 출력
 * i
 * im
 * it
 * no
 * but
 * more
 * wait
 * wont
 * yours
 * cannot
 * hesitate
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const words = [];
for (let i = 1; i <= +input[0]; i++) {
  words.push(input[i]);
}
const arr = [...new Set(words)]; //중복 제거

arr.sort((w1, w2) => {
  if (w1.length !== w2.length) return w1.length - w2.length;
  if (w1 < w2) return -1;
  else if (w1 > w2) return 1;
  else return 0;
});

arr.forEach((w) => console.log(w));
