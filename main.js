function handleClickEvent() {
  var amountDue = parseFloat( $("#amount-due").val());
  var amountReceived = parseFloat($("#amount-received").val());

  var runningTotal = (amountReceived - amountDue) * 100;
  $("#your-change-is").html("$" + runningTotal / 100);

  var denomList = [
    { where: "#dollars-output", value: 100 },
    { where: "#quarters-output", value: 25 },
    { where: "#dimes-output", value: 10 },
    { where: "#nickels-output", value: 5 },
    { where: "#pennies-output" },
  ];

  denomList.forEach(function (item) {
    if (item.value) {
      $(item.where).html(parseInt(runningTotal / item.value));
      runningTotal %= item.value;
    } else {
      $(item.where).html(Math.round(runningTotal));
    }
  });
}
