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
