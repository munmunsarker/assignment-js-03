// first problem
function kilometerToMeter(number) {
    if (number < 0) {
      return 'plese give me a positive number';

    } else if (number >= 0) {
      var meter = number * 1000;
      return meter;
    } else {
      return 'plese give me a positive valid number';
    }
  }
//   second problem
function budgetCalculator(watch, mobile, computer) {
    if (watch < 0 || mobile < 0 || computer < 0) {
      return 'plese give me a positive value';
    } else if (watch >= 0 ||mobile >= 0 || computer >= 0) {
      var watchPrice = watch * 50;
      var mobilephone = mobile * 100;
      var computePrice = computer * 500;
      var totalPrice = watchPrice + mobilephone + computePrice;
      return totalPrice;
    } else {
      return 'plese give me a number value';
    }
  }
//   third problem
function hotelCost(day) {
    var bill = 0;
    if (day <= 10) {
      return day * 100;
    } else if (day <= 20) {
      var bill = 10 * 100;
      var nextDays = day - 10;
      var restBill = nextDays * 80;
      return bill + restBill;
    
    } else if (day >= 20) {
      var bill = 10 * 100;
      var restBill = 10 * 80;
      var afterDays = day - 20;
      var newBill = afterDays * 50;
      var totalCost = bill + restBill + newBill;
      return totalCost;
    } else {
      return 'give me a positive number';
    }
    return totalCost;
  }
//  problem four
  function megaFriend(largestName) {
    var element = 0;
    var largeNum;
    for (var i = 0; i < largestName.length; i++) {
      if (largestName[i].length > element) {
        var element = largestName[i].length;
        largeNum = largestName[i];
      }
    }
    return largeNum; 
  }