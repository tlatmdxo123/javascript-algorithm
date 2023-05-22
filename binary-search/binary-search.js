function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
}
