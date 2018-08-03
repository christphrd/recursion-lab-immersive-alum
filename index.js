// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    printString(string.substring(1))
  } else {
    return true
  }
}

function reverseString(str) {
  if (str.length > 1) {
    return str.substring(str.length - 1) + reverseString(str.substring(0,str.length - 1))
  } else {
    return str
  }
}

function isPalindrome(str) {
  if (str.length > 2 && str.slice(0,1) === str.slice(str.length - 1)) {
    return isPalindrome(str.slice(1,str.length-1))
  } else {
    return str.slice(0,1) === str.slice(str.length - 1)
  }
}

function addUpTo(arr, index) {
  if (index !== 0) {
    return arr[index] + addUpTo(arr, index - 1)
  } else {
    return arr[index]
  }
}

function maxOf(arr) {
  let copiedArr = arr.slice()
  if (arr.length > 1 && arr[0] > arr[arr.length -1]) {
    copiedArr.pop()
    return maxOf(copiedArr)
  } else if (arr.length > 1 && arr[0] < arr[arr.length -1]) {
    copiedArr.shift()
    return maxOf(copiedArr)
  } else {
    return arr[0]
  }
}

function includesNumber(arr, num) {
  let copiedArr = arr.slice()
  if (arr[0] === num) {
    return true
  } else if (arr.length > 1) {
    copiedArr.shift()
    return includesNumber(copiedArr, num)
  } else {
    return arr[0] === num
  }
}
