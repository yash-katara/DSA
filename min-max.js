function findminmax(arr)
{let min = arr[0];
 let max = arr[0];
for (let i=0; i<arr.length;i++){
    if (min>arr[i]){
       min = arr[i];
    }
    if (max<arr[i]){
         max = arr[i];    
   }  
}

  return{min,max};


}
 const arr = [1,2,3,4,5];
 console.log(findminmax(arr))



 const arr1 = [6,7,8,9];
 let min = arr1[0];
 let max = arr1[0];
 for (let item of arr1){
   if(min>item){
       min = item;
       
    }
    if(max<item){
        max = item;
        
    }
 }
   console.log(min); 
   console.log(max);