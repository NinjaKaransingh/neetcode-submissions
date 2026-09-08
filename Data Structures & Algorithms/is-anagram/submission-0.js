class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;
        let count1 = {};
        let count2 = {};

        for(let i=0;i<s.length;i++){
            let char = s[i];
            if(count1[char]){
                count1[char] += 1;
            }
            else{
                count1[char] = 1;
            }
        }

        for(let i=0;i<t.length;i++){
            let char = t[i];
            if(count2[char]){
                count2[char] += 1;
            }
            else{
                count2[char] = 1;
            }
        }

        for(let char in count1){
            if(count1[char] !== count2[char]){
                return false;
            }
        }
        return true;
    }
}
