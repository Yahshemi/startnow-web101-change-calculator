function handleClickEvent() {

  var amountDueElm = $("#amount-due");
  var amountReceivedElm = $("#amount-received");
  var btnElm = $("#calculate-change");
// Convert the string into a number
  var amountDue = parseFloat(amountDueElm.val());
  var amountReceived = parseFloat(amountReceivedElm.val());
  // Get the difference and convert into pennies
  var runningTotal = (amountReceived - amountDue) * 100;
  $('#your-change-is').html('$' + runningTotal / 100);
  
  // Create individual JSON objects for the denoms dollar - pennies
  var denomList = [
    { "where": '#dollars-output',  "value": 100 }, 
    { "where": '#quarters-output', "value": 25 }, 
    { "where": '#dimes-output',    "value": 10 },
    { "where": '#nickels-output',  "value": 5 }, 
    { "where": '#pennies-output' }
  ];
  // loop through denomList
  denomList.forEach(function(item){
    if (item.value) {
      $(item.where).html(parseInt(runningTotal / item.value));
      runningTotal %= item.value;
    } else {
      // console.log(runningTotal);
      $(item.where).html(Math.round(runningTotal));
    }
  });
}
