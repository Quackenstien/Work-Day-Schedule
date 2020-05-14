const date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

$(".time-block").each(function () {
  const currentHour = parseInt(moment().format("H"));
  const hour = parseInt($(this).attr("data-hour"));

  if (hour < currentHour) {
    $(this).find("textarea").addClass("past");
  } else if (hour > currentHour) {
    $(this).find("textarea").addClass("future");
  } else {
    $(this).find("textarea").addClass("present");
  }

  console.log(hour, currentHour);
});

$(".saveBtn").on("click", function () {
  event.preventDefault();

  var time = $(this).parent().attr("data-hour");
  var value = $(this).siblings(".description").val();
  localStorage.setItem(time, value);
});

$("#hr9 .description").val(localStorage.getItem("9"));
$("#hr10 .description").val(localStorage.getItem("10"));
$("#hr11 .description").val(localStorage.getItem("11"));
$("#hr12 .description").val(localStorage.getItem("12"));
$("#hr13 .description").val(localStorage.getItem("13"));
$("#hr14 .description").val(localStorage.getItem("14"));
$("#hr15 .description").val(localStorage.getItem("15"));
$("#hr16 .description").val(localStorage.getItem("16"));
$("#hr17 .description").val(localStorage.getItem("17"));
