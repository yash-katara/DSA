
let strs = ["fower", "flow", "flight"];
function longestcommonprefix(strs){
    // if(!strs.length)
    //     return "";
    let prefix = strs[0];
    for (let i= 1; i<strs.length;i++){
        // Jab tak current word prefix se start nahi hota
        while (strs[i].indexOf(prefix)!==0){
             // prefix ka last character hata do
            prefix = prefix.slice(0,-1);
            // agar sab hat gaya to return "sher"
            if (!prefix) return "sher";
        }
    }
    return prefix;
}

console.log(longestcommonprefix(strs)); 






