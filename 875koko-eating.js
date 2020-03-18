/*
Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.



Example 1:

Input: piles = [3,6,7,11], H = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], H = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], H = 6
Output: 23


Note:

1 <= piles.length <= 10^4
piles.length <= H <= 10^9
1 <= piles[i] <= 10^9
*/

  // iterate through array for grab element
    // grab first element


    // STEP 1
    // iterate through array for target element
      // compare grabbed element with each element in array
      // if >= then
         // increment hour by 1
      // else
         // calculate hours needed by dividing target element by grabbed element and round up

    // check if hours is less H
       // continue
    // else if hours is equal then decrement the grab value and repeat STEP 1
    // else if hours is greater
       // return grab value + 1;


     // [3,6,7,11],8
     // 4/8 = .5 (length of array / hours needed)
     // [1.5, 3, 3.5, 5.5], 4
     // [2,3,4,6], 4
     //  1,1,1,1 = 4
     // 6
     //  1,1,1,1 = 4
     // 5
     //  1,1,1,2 = 5
     // 4

     // piles = [30,11,23,4,20], H = 5
     // 5/5 = 1
     // 1,1,1,1,1 = 5
     // 30
     // 2,
     // 29

     // ([332484035, 524908576, 855865114, 632922376, 222257295, 690155293, 112677673, 679580077, 337406589, 290818316, 877337160, 901728858, 679284947, 688210097, 692137887, 718203285, 629455728, 941802184],823855818)
     // 823855818÷18 = 45769767.666666667

     // [7.264271853,11.468456205,18.699354566,13.8283939,] 1

     // [3,6,7,11], 8

     // Math.ceil(piles[i] / k) + Math.ceil(piles[i+1] / k) + Math.ceil(piles[i+2] / k) <= total H


    //   2,2,2,2
    //
     // [.375, .75, .875, 1.375], 1
     //  .25,  .5, .5,   .75  = 2
     // .5

     // 1,2,2,3
     // 4

     // 4/8 = .5 (length of array / hours needed)
     // [1.5, 3, 3.5, 5.5],

     // [time,time,time,time], total time
     // total time / length of array = time needed


     var minEatingSpeed = function(piles, H) {

      var k = 1;
      var val = 0;
      var max = Math.max(...piles)
      while(k <= max) {
        var sum = 0;
        for(let i = 0; i < piles.length; i++) {
          sum += Math.ceil(piles[i]/k);
        }
        if(sum/H <= 1) {
          return k;
        }
        k += 1;
      }
      return k - 1;
    }

    // var minEatingSpeed = function(piles, H) {
    //   // sort piles array
    //   piles.sort((a,b)=>b-a);
    //   var hours = 0;
    //   var i = 0;
    //   // return value
    //   var k = 0;
    //   // recursive call
    //   var grabNext = function(grabbed) {
    //     // initialize hours
    //     hours = 0;
    //     // set k
    //     k = grabbed;
    //     // STEP 1
    //     // iterate through array for target element
    //     for(let j=0;j < piles.length; j++) {
    //       // compare grabbed element with each element in array
    //       // if >= then
    //       if(grabbed >= piles[j]) {
    //          // increment hour by 1
    //          hours += 1;
    //       } else {
    //       // else
    //          // calculate hours needed by dividing target element by grabbed element and round up
    //          hours += Math.ceil(piles[j]/grabbed);
    //       }
    //     }

    //     // check if hours is less H
    //     if(hours < H) {
    //     // skip to next grabbed element
    //     i += 1;
    //     return grabNext(piles[i]);
    //     // else if hours is equal then decrement the grab value and repeat STEP 1
    //     } else if(hours === H ) {
    //       k -= 1;
    //       return grabNext(k);
    //     // else if hours is greater
    //     } else {
    //       // return k value + 1;
    //       return k + 1;
    //     }

    //   }
    //   //grab next
    //   return grabNext(piles[i]);

    // };