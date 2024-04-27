let visible = true;
let wordClock = $("#wordClock");
document.addEventListener("keydown", function(e)
{
	if (e.code === "KeyH")
	{
		if (visible)
		{
			document.getElementById("navbar").style.visibility = "hidden";
			visible = false;
		}
		else
		{
			document.getElementById("navbar").style.visibility = "visible";
			visible = true;
		}
	}

	if (e.code === "Minus")
	{
		wordClock.css("font-size", "-=1");
	}
	if (e.key === "+")
	{
		wordClock.css("font-size", "+=1");
	}
});


setTime();
setInterval(function()
{
	setTime();
}, 1000);

function setTime()
{
	let date = new Date();
	console.log(date);
	if (date.getHours() < 12)
	{
		$("#in").css("color", "black");
		$("#the").css("color", "black");
		$("#morning").css("color", "black");
		$("#at").css("color", "lightsteelblue");
		$("#night").css("color", "lightsteelblue");
	}
	else if (date.getHours() < 18)
	{
		$("#in").css("color", "black");
		$("#the").css("color", "black");
		$("#afternoon").css("color", "black");
		$("#morning").css("color", "lightsteelblue");
	}
	else
	{
		$("#at").css("color", "black");
		$("#night").css("color", "black");
		$("#in").css("color", "lightsteelblue");
		$("#the").css("color", "lightsteelblue");
		$("#afternoon").css("color", "lightsteelblue");
	}

	let hour = date.getHours() % 12;
	if (hour === 0)
	{
		hour = 12;
	}
	$("#hour" + hour).css("color", "black");
	if (hour === 1)
	{
		$("#hour12").css("color", "lightsteelblue")
	}
	else
	{
		$("#hour" + (hour - 1)).css("color", "lightsteelblue");
	}

	let minute = date.getMinutes();
	if (minute === 0)
	{
		$("#o").css("color", "black");
		$("#clock").css("color", "black");
	}
	else if (minute < 10)
	{
		$("#clock").css("color", "lightsteelblue");
		$("#o").css("color", "black");
		$("#minute" + minute).css("color", "black");
	}
	else if (minute < 21)
	{
		$("#o").css("color", "lightsteelblue");
		$("#minute" + minute).css("color", "black");
	}
	else
	{
		$("#minute" + Math.floor(minute / 10) * 10).css("color", "black");
		$("#minute" + (minute % 10)).css("color", "black")
	}
	if (minute === 0)
	{
		$("#minute50").css("color", "lightsteelblue");
		$("#minute9").css("color", "lightsteelblue");
	}
	else
	{
		if ((minute - 1) < 20)
		{
			$("#minute" + (minute - 1)).css("color", "lightsteelblue");
		}
		else
		{
			$("#minute" + (Math.floor(minute / 10) - 1) * 10).css("color", "lightsteelblue");
			$("#minute" + ((minute - 1) % 10)).css("color", "lightsteelblue")
		}
	}

	let weekday = date.getDay();
	$("#week" + weekday).css("color", "black");
	if (weekday === 0)
	{
		$("#week6").css("color", "lightsteelblue");
	}
	else
	{
		$("#week" + (weekday - 1)).css("color", "lightsteelblue");
	}

	let month = date.getMonth();
	$("#month" + month).css("color", "black");
	if (month === 0)
	{
		$("#month11").css("color", "lightsteelblue");
	}
	else
	{
		$("#month" + (month - 1)).css("color", "lightsteelblue");
	}

	let day = date.getDate();
	if ((day < 21) || (day === 30))
	{
		$("#twenty").css("color", "lightsteelblue");
		$("#day" + day).css("color", "black");
	}
	else
	{
		if (day < 30)
		{
			$("#twenty").css("color", "black");
		}
		else
		{
			$("#thirty").css("color", "black");
		}
		$("#day" + (day % 10)).css("color", "black")
	}
	if (day === 0)
	{
		$("#day20").css("color", "lightsteelblue");
		$("#day30").css("color", "lightsteelblue");
		$("#day8").css("color", "lightsteelblue");
		$("#day9").css("color", "lightsteelblue");
		$("#thirty").css("color", "lightsteelblue");
	}
	else
	{
		if ((day - 1) < 21)
		{
			$("#day" + (day - 1)).css("color", "lightsteelblue");
		}
		else
		{
			$("#day" + (Math.floor(day / 10) - 1) * 10).css("color", "lightsteelblue");
			$("#day" + ((day - 1) % 10)).css("color", "lightsteelblue")
		}
	}
}