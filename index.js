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
  let strArr = str.split("")
  if (str.length > 2 && strArr[0] === strArr[strArr.length - 1]) {
    strArr.shift()
    strArr.pop()
    return isPalindrome(strArr.join(""))
  } else {
    return strArr[0] === strArr[strArr.length - 1]
  }
}

function addUpTo(arr, index) {
  if (index !== 0) {
    return arr[index] + addUpTo(arr, index - 1)
  } else {
    return arr[index]
  }
}
