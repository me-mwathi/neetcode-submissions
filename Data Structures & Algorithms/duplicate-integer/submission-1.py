class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        array_length = len(nums)
        # return array_length
        for index in range(array_length):
            y = index+1

            while y < array_length:
                if nums[index]==nums[y]: 
                    return True
                else:
                    y+=1
            
        return False;


        