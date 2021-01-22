// Kilotmeter to Meter----------------------------------------------------------
function kilometerToMeter(numOfKilometer) {
    var meter = numOfKilometer * 1000;
    return meter;
}
var getKilometer = kilometerToMeter(5);
console.log(getKilometer);


// Budget Calculator----------------------------------------------------------
function budgetCalculator(watch, mobile, laptop){
   if(watch >= 0, mobile >= 0, laptop >= 0){
      var watchPrice = watch * 50;
      var mobilePrice = mobile * 100;
      var laptopPrice = laptop * 500;
      var totalPrice = watchPrice + mobilePrice + laptopPrice;
   }
   return totalPrice;
}
var totalBudget = budgetCalculator(5, 3, 2);
console.log(totalBudget);


// Hotel Cost----------------------------------------------------------------------
function hotelCost(day) {
    var cost = 0;
if(day <= 10){
    cost = day * 100;
}else if(day <= 20){
    var firstTenthDays = 10 * 100;
    var remaining = day - 10;
    var secondTenthDays = remaining * 80;
    cost = firstTenthDays + secondTenthDays;
}else{
    var firstTenthDays = 10 * 100;
    var secondTenthDays = 10 * 80;
    var remaining = day -20;
    var moreThen20 = remaining * 50;
    cost = firstTenthDays + secondTenthDays + moreThen20;
}
return cost;
}
var totalCost = hotelCost(22);
console.log(totalCost);


// Mega Friend-------------------------------------------------------------------------
function  megaFriend(friendsName) {
    var wordLength = 0;
for (var i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length > wordLength) {
        var wordLength = friendsName[i].length;
        var largest = friendsName[i];
    } 
}
return largest;
}
var friendsName = ["Arman", "Nurul", "Sabiha", "Moshiur Asif", "Obaidul Kader", "Golapi", "Shamima", "Mozammel"];
var myMegaFriend = megaFriend(friendsName);
console.log(myMegaFriend);
