class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //iterate array
        let hashMap = {};
        for (let i = 0; i < nums.length; i++) {
            var searchNumber = nums[i];

            if (i > 0) {
                if (hashMap[searchNumber]) {
                    return hashMap[searchNumber];
                }
            }

            hashMap[searchNumber] = true;
        }
        return false;
    }
}
