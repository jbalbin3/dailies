const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 }
];

const capacity = 20;


// iterate cakeTypes object
  // find highest ratio of cakeTypes
  // get max that we can carry from highest ratio
  // store with new weight and new value ??? how will it be stored???

  // leftover weight we find the next caketype with less weight and highest ratio
  // [1,3,2]  // array of indexes sorted by highest ratio

var maxDuffelBagValue = (cakeTypes, capacity) => {
  let maxValue = 0;
  const arr = [];
  for(let i in cakeTypes) {
    arr.push({ratio: cakeTypes[i].value/cakeTypes[i].weight, index: i});
  }
  console.log(arr);
  arr.sort((a,b)=>a.ratio - b.ratio);
  console.log('after',arr);
  let maxVal = maxWeight = 0;
  // let maxVal = Math.floor(capacity/(cakeTypes[arr[arr.length-1].index].weight)) * (cakeTypes[arr[arr.length-1].index].value)
  // let maxWeight = Math.floor(capacity/(cakeTypes[arr[arr.length-1].index].weight)) * (cakeTypes[arr[arr.length-1].index].weight)
  // console.log(maxVal, maxWeight)
  // arr.pop();
  // capacity -= maxWeight;

  for(let i = arr.length-1; i >=0; i--) {
    if(cakeTypes[arr[i].index].weight <= capacity) {
      maxVal += Math.floor(capacity/(cakeTypes[arr[i].index].weight)) * cakeTypes[arr[i].index].value;
      maxWeight += Math.floor(capacity/(cakeTypes[arr[i].index].weight)) * cakeTypes[arr[i].index].weight;
      if(arr[i-1] && arr[i].ratio === arr[i-1].ratio) {
        let tempVal = Math.floor(capacity/(cakeTypes[arr[i-1].index].weight)) * cakeTypes[arr[i-1].index].value;
        let tempWeight = Math.floor(capacity/(cakeTypes[arr[i-1].index].weight)) * cakeTypes[arr[i-1].index].weight;
        maxVal = Math.max(maxVal,tempVal);
        maxWeight = Math.max(maxWeight, tempWeight);
      }
      capacity -= maxWeight;
      // console.log(maxVal, maxWeight, capacity)
    }
    if(capacity <= 0) {
      break;
    }
  }
  console.log('return',maxVal)
  return maxVal;
}

// maxDuffelBagValue(cakeTypes, capacity);

// check that weight is less or equal to capacity
// 2 x 7 = 14
// weight 2x7 = 14, value 2x160 = 320 max
// 6 x 3 = 18
// weight 6x3 = 18, value 6x90 = 540 max
// 10 x 2 = 20
// weight 10x2 = 20, value 10x15 = 150 max
// maxes [{weight: 14, value: 320} , {weight: 18, value: 540},{weight: 20, value: 150}]



// pattern with array sorted by heaviest weight first
// add next cake type to have weight equal or less than capacity weight

// [{weight: 14, value: 320}, {weight: 2x3, value: 2x90}] -
// [{weight: 14, value: 320}, {weight: 1x3, value: 1x90}, { weight: 2, value: 15 }]
// [{weight: 14, value: 320}, { weight: 3x2, value: 3x15 }]
// [{weight: 7, value: 160}, {weight: 4x3, value: 4x90}]
// [{weight: 7, value: 160}, {weight: 3x3, value: 3x90},{ weight: 2x2, value: 2x15 }]
// [{weight: 7, value: 160}, {weight: 2x3, value: 2x90},{ weight: 3x2, value: 3x15 }]
// [{weight: 7, value: 160}, {weight: 1x3, value: 1x90},{ weight: 5x2, value: 5x15 }]
// [{weight: 6x3, value: 6x90}, {weight: 2, value: 15}] -> 555 (new max value)
// [{weight: 5x3, value: 5x90}, {weight: 2x2, value: 2x15}] - > 480
// [{weight: 4x3, value: 4x90}, {weight: 3x2, value: 3x15}] -> 405
// [{weight: 3x3, value: 3x90}, {weight: 5x2, value: 5x15}] -> 345
// [{weight: 2x3, value: 2x90}, {weight: 7x2, value: 7x15}] -> 285
// [{weight: 1x3, value: 1x90}, {weight: 7x2, value: 7x15}] -> 285
// [{weight: 10x2, value: 10x15}] -> 150 <----- max for 1 type
// [{weight: 9x2, value: 9x15}]


// Tests

let desc = 'one cake';
let actual = maxDuffelBagValue([{ weight: 2, value: 1 }], 9);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'two cakes';
actual = maxDuffelBagValue([
  { weight: 4, value: 4 },
  { weight: 5, value: 5}], 9);
expected = 9;
assertEqual(actual, expected, desc);

desc = 'only take less valuable cake';
actual = maxDuffelBagValue([
  { weight: 4, value: 4 },
  { weight: 5, value: 5 }], 12);
expected = 12;
assertEqual(actual, expected, desc);

desc = 'lots of cakes';
actual = maxDuffelBagValue([
  { weight: 2, value: 3 },
  { weight: 3, value: 6 },
  { weight: 5, value: 1 },
  { weight: 6, value: 1 },
  { weight: 7, value: 1 },
  { weight: 8, value: 1 }], 7);
expected = 12;
assertEqual(actual, expected, desc);

desc = 'value to weight ratio is not optimal';
actual = maxDuffelBagValue([
  { weight: 51, value: 52 },
  { weight: 50, value: 50 }], 100);
expected = 100;
assertEqual(actual, expected, desc);

desc = 'zero capacity';
actual = maxDuffelBagValue([{ weight: 1, value: 2 }], 0);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'cake with zero value and weight';
actual = maxDuffelBagValue([
  { weight: 0, value: 0 },
  { weight: 2, value: 1 }], 7);
expected = 3;
assertEqual(actual, expected, desc);

desc = 'cake with non-zero value and zero weight';
actual = maxDuffelBagValue([{ weight: 0, value: 5 }], 5);
assertEqual(isFinite(actual), false, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}