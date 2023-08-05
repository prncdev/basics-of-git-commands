function FindTwSum(numbers, target) {
  // We will be using hash table Data Structure to solve this problem.
  const numbersTable = {};
  for(let i = 0; i < numbers.length; i++) {
    const currnetNumber = numbersTable[numbers[i]];
    if(currnetNumber >= 0) return [currnetNumber, i];
    else {
      const numberToFind = target - numbers[i];
      numbersTable[numberToFind] = i;
    }
  }

  return null;
}

FindTwSum([1,3,7,9,2], 11);