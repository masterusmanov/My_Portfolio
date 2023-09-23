function incrementArray(digits) {
    let carry = 1; // Initialize carry as 1 for incrementing by 1
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        if (sum < 10) {
            digits[i] = sum;
            return digits; // No need to carry over, return modified array
        } else {
            digits[i] = 0;
            carry = 1;
        }
    }
    
    // If carry still exists after the loop (e.g., [9] becomes [0, 0]),
    // add the carry as a new digit to the beginning of the array
    if (carry === 1) {
        digits.unshift(1);
    }
    
    return digits;
}

// Test cases
console.log(incrementArray([1, 2, 3])); // Output: [1, 2, 4]
console.log(incrementArray([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(incrementArray([9])); // Output: [1, 0]