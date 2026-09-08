class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {};

        for(let i =0;i<nums.length;i++){
           let char = nums[i];

           if(count[char]){
            return true;
           }
           else{
            count[char] = 1;
           } 
        }
        return false;
    }
}
