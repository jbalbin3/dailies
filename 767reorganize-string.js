var reorganizeString = function(S) {
  if(S.length === 1) { return S}
  if(S.length == 2 && S[0] === S[1]) { return '' }

  var memo = {};
  for(let i=0; i < S.length; i++) {
      if(!memo[S[i]]) {
          memo[S[i]] = 1;
      } else {
          memo[S[i]] += 1;
      }
  }
  console.log(JSON.stringify(memo));

  chars = Object.keys(memo).sort(function(a,b){return memo[b]-memo[a]})

  console.log(chars);

  var result = '';
  while(chars.length) {
    if(memo[chars[0]] === S.length ||
      (memo[chars[0]] === (Math.ceil(S.length/2) + 1) && S.length > 3)) {
      return '';
    }
    // console.log(JSON.stringify(memo),chars);
    if(memo[chars[0]] > 1) {
      result += chars[0];
      memo[chars[0]] -= 1;
      if(memo[chars[1]]) {
        result += chars[1];
        memo[chars[1]] === 1 ? chars.splice(1,1) : memo[chars[1]] -= 1;
      }
    } else {
      result += chars[0];
      chars.shift();
    }
  }


  // for(let k = 0; k < chars.length; k++) {
  //   if(memo[chars[k]] >= S.length - 1) {
  //     return '';
  //   }

  //   }
  //   if(memo[chars[k]] > 1) {
  //     result += chars[k];
  //     memo[chars[k]] -= 1;
  //   }
  // }
  return result;
};

// reorganizeString('aaab');

reorganizeString('tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao');