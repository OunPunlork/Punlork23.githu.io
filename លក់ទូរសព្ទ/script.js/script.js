function luhn(number){
   number = number.toString().split("").reverse()
   var sum = 0;
   for (var i = 0; i<number.length; i++){
      if(i % 2==0){
      sum +=Number( number[i]);
      }else{
         sum +=Number( number[i]) * 2;
      }
   }
   
}
if (sum % 10==0) {
   return true;
}else{
   return false;
}
return sum;