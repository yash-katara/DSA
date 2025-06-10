console.log(Math.floor(Math.random()*10000));



function generateOTP(length=6){
let otp ='';
for(let i = 0; i < 6; i++)
    {
    otp += Math.floor(Math.random() * 10); 
}
 
return otp;
}
console.log(generateOTP());