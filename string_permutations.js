/* Write a recursive function for generating all permutations of an input string. Return them as a set. */

/* example:
'cat' -> Set { 'cat','cta','atc','act','tac','tca' }
*/

function perm (string) {

  // c at
  // c ta
  // a tc
  // a ct
  // t ac
  // t ca

  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = perm(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}

console.log(perm('cat'));