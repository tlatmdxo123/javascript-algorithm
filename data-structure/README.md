# 자바스크립트 자료구조

## 자료구조의 종류

### 1. 선형 구조

데이터가 연속적으로 하나씩 연결되어 있는 자료구조

- 배열
- 연결 리스트
- 스택
- 큐

### 2. 비선형 구조

하나의 데이터 뒤에 여러개의 데이터가 연결될 수 있는 자료구조

- 트리
- 그래프

## 자료구조의 성능 측정

### 시간복잡도

알고리즘에 사용되는 연산 횟수를 측정  
빅오 표기법을 사용

### 시간측정

- 통상 코딩테스트의 시간제한은 1~5초
- 자바스크립트는 1억번 연산에 1~5초가 걸린다
- 시간 제한이 1초일 경우
  - N의 범위가 500 - O(N3)
  - N의 범위가 2000 - O(N2)
  - N의 범위가 100,000 - O(NlogN)
  - N의 범위가 10,000,000 - O(N)

### 공간 복잡도

알고리즘에 사용되는 메모리의 양을 측정

## 배열

- 각 인덱스마다 값을 담을 수 있는 자료구조
- 인덱스는 0부터 시작
- 특정한 인덱스에 접근하는 시작 복잡도는 O(1)

### 자바스크립트에서의 배열

- 자바스크립트의 경우 동적으로 메모리 할당
- 일반적인 배열과 스택에 사용 가능(큐의 경우 따로 구현하는 것이 효율적)

```javascript
let arr = Array.from({ length: 5 }, () => 7);
console.log(arr); //[7,7,7,7,7]
```

```javascript
let arr = Array.from(Array(4), () => new Array(5));
console.log(arr);
// [
//     [5개 요소의 빈배열],
//     [5개 요소의 빈배열],
//     [5개 요소의 빈배열],
//     [5개 요소의 빈배열]
// ]
```

### 대표적인 배열 메서드

1.concat() : 여러개의 배열을 합친 결과를 리턴

- 시간 복잡도는 O(N)

2. slice(a,b) : a인덱스 부터 b-1인덱스에 있는 값까지의 배열을 리턴

- 시간 복잡도는 O(N)

3. indexOf(n) : 특정 값(n)에 해당하는 첫번째 인덱스를 리턴, 없을 시 -1을 리턴

- 시간 복잡도는 O(N)

## 스택

- Fisrt In Last Out 정책을 따르는 자료구조
- 삽입(Push) : O(1)
- 추출(Pop) : O(1)
- 마지막 원소 확인 : O(1)
- 비어있는지 확인 : O(1)

## 큐

- First In First Out 정책을 따르는 자료구조
- 자바스크립트의 딕셔너리를 사용하면 삽입과 삭제시 O(1) 시간복잡도 보장할 수 있음

## 트리

- 하나의 root 노드에서 시작해서 n개의 자식 노드가 재귀적으로 반복되는 자료구조. 더 이상 자식이 없을 때 까지 반복한다.

### 트리 용어

- 길이 : 출발 노드에서 목적지 노드까지 거쳐야 하는 간선의 수
- 높이 : 루트 노드에서 가장 깊은 노드까지의 길이

### 이진 트리

- 최대 2개의 자식을 가질 수 있는 트리

#### 이진트리 종류

- 포화 이진 트리 : 리프 노트를 제외한 모든 노드가 두 자식을 가지고 있는 트리
- 완전 이진 트리 : 루트부터 출발해서 모든 노트가 왼쪽 자식부터 차례대로 채워진 트리
- 높이 균형 트리 : 왼쪽 자식 트리와 오른쪽 자식 트리의 높이가 1이상 차이 나지 않는 트리
- 힙 : 완전 이진 트리를 활용한 자료구조로 최댓값 혹은 최솟값부터 추출 가능한 자료구조. 삽입과 삭제 모두 O(logN)의 시간 복잡도.
  - 최대 힙 : 부모 노드가 자식 보다 큰 값을 가지는 완전 이진 트리. 루트 노드가 전체 트리에서 가장 큰 값을 가짐
  - 최소 힙 : 부모 노트가 자식보다 작은 값을 가지는 완전 이진 트리. 루트 노드가 전체 트리에서 가장 작은 값을 가짐
  - 새로운 원소가 삽입될 때 : 자식 노드와 부모 노드를 지속적으로 비교하여 우선순위에 맞게 정렬될 때까지 반복한다(logN)
  - 원소를 꺼낼 때 : 가장 마지막 노드가 루트 노드에 위치하도록 한다(logN) + 하향식으로 우선순위에 맞게 노드를 조정(logN)

### 우선순위 큐

- 힙을 이용해 구현할 수 있는 자료구조
- 우선순위에 따라 데이터를 리턴하는 자료구조

## 그래프

그래프란 노드(vertex)가 간선(edge)으로 연결된 자료구조를 의미한다. `인접 행렬` 또는 `인접 리스트`를 활용하여 구현할 수 있다.

### 인접 행렬을 활용한 구현

n개의 노드로 구성된 그래프의 경우 n\*n으로 구성된 2차원 배열로 한 노드에서 특정 노드까지의 거리를 표현할 수 있다.
메모리는 O(n2)이 필요하지만, 노드 사이의 연결 여부를 O(1)시간에 확인할 수 있다는 장점이 있다.

### 인접 리스트를 활용한 구현

각 노드를 배열의 인덱스와 맵핑하고 해당 노드별로 이동할 수 있는 노드의 리스트를 배열로 표현하여 2차원 배열로 표현할 수 있다. 무가중치의 그래프일 경우 단순히 노드의 리스트를 표현하면 되지만, 가중치 그래프일 경우 노드와 함께 간선 가중치도 함께 리스트에 표현해야한다. 메모리는 O(노드 개수+간선 개수)이 필요하고 노드 사이의 연결 여부를 O(노드 개수)시간에 확인할 수 있다.

### 인접 행렬 vs 인접 리스트

- 간선 개수가 적은 그래프(ex.최단경로)일 경우 인접 리스트가 유리하다.
- 반대로 간선 개수가 많은 그래프의 경우 인접 행렬이 유리하다.
