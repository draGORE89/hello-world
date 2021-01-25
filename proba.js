let input = [
    '21',
    '61',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let totalText = +gets();
let totalMinute = +gets();
let additionalMinutes = totalMinute - 60;
let additionalMinutesCost = additionalMinutes * 0.1;
let additionalText = totalText - 20;
let additionalTextCost = additionalText * 0.06;
let additionalTaxes = (additionalMinutesCost + additionalTextCost) * 0.2;
let totalBill = additionalMinutesCost + additionalTextCost + 12 + additionalTaxes;

if(totalText > 20) {
 
    print(`${additionalText} additional messages for ${additionalTextCost.toFixed(2)} levas`);
}
else {
    print('0 additional messages for 0.00 levas')
}

if(totalMinute > 60) {

print(`${additionalMinutes} additional minutes for ${additionalMinutesCost.toFixed(2)} levas`);
}
else {print('0 additional minutes for 0.00 levas');}



if(additionalTaxes > 0) {
    print(`${additionalTaxes.toFixed(2)} additional taxes`); 
}
else{print('0.00 additional taxes');}

if(additionalMinutes > 1 || additionalText > 1) 
{
   print(`${totalBill.toFixed(2)} total bill`);
}
else {
    print(`Total cost is 0.00`);}
asd
asd
asd

  
   
