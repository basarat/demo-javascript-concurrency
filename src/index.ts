let alpha = 'john';
let beta = 'jane';

// Don't use any new variables
let one, two;
[one, two] = [alpha, beta];

// Test
console.log(alpha == 'jane' && beta == 'john'); // true