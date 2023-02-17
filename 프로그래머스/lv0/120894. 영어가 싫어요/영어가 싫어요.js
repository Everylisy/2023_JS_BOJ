function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    nums.map((_, idx) => {
        numbers = numbers.split(nums[idx]).join(idx);
    });
    return +numbers;
}