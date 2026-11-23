class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //iterate array
        let dict = {};
        for (let i = 0; i <= nums.length; i++) {
            var searchNumber = nums[i];
           
            if (i > 0) {
                if (dict[searchNumber] === 0) {
                    // console.log(" condition: ", dict[searchNumber] === 0);
                    // console.log(" state1: ", JSON.stringify(dict) );
                    // console.log(" state1: ", dict[searchNumber] );

                    return true;
                }
            }
            
            dict[searchNumber] = 0;
        }
        return false;
        //compare values
        //if duplicates are in sperate part fo the array
    }
}
