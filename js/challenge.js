//YES I understand that I really should have defined variables for each of these jQuery selectors...
//However, quite honestly I don't have the motivation to go back and fix my bad code habits from WebDev #sorrynotsorry

$(".firstButton").click(function ()
{
	$("#firstInput").val($(this).text());
	firstRun($("#firstInput").val());
});

$("#firstInput").keyup(function ()
{
	firstRun($("#firstInput").val());
});

$(".secondButton").click(function ()
{
	$("#secondInput").val($(this).text());
	secondRun($("#secondInput").val());
});

$("#secondInput").keyup(function ()
{
	secondRun($("#secondInput").val());
});

$(".thirdButton").click(function ()
{
	$("#thirdInput").val($(this).text());
	thirdRun($("#thirdInput").val());
});

$("#thirdInput").keyup(function ()
{
	thirdRun($("#thirdInput").val());
});

$(".forthButton").click(function ()
{
	$("#forthInput").val($(this).text());
	forthRun($("#forthInput").val());
});

$(".forthRandom").click(function ()
{
	$("#forthText").text("Parsing...");
	let max = getRandom(8, 21);
	if (max % 2 !== 0)
	{
		--max;
	}
	let string = "";
	let previous = null;
	for (let i = 0; i < max; ++i)
	{
		let tmp = getRandom(0, 7);
		switch (tmp)
		{
			case 0:
				if (previous === 1)
				{
					// --i;
					string += "?";
					previous = '?';
					break;
				}
				string += "r";
				previous = 0;
				break;
			case 1:
				if ((previous === 0) || (previous === null) || (i === (max - 1)))
				{
					// --i;
					string += "?";
					previous = '?';
					break;
				}
				string += "l";
				previous = 1;
				break;
			case 2:
				if ((previous === 3) || (previous === null) || (i === (max - 1)))
				{
					// --i;
					string += "?";
					previous = '?';
					break;
				}
				string += "u";
				previous = 2;
				break;
			case 3:
				if (previous === 2)
				{
					// --i;
					string += "?";
					previous = '?';
					break;
				}
				string += "d";
				previous = 3;
				break;
			default:
				string += "?";
				previous = '?';
				break;
		}
	}
	$("#forthInput").val(string);
	forthRun(string);
});

$("#forthInput").keyup(function ()
{
	forthRun($("#forthInput").val());
});

$(".fifthButton").click(function ()
{
	$("#fifthInput").val($(this).text());
	fifthRun($("#fifthInput").val());
});

$("#fifthInput").keyup(function ()
{
	fifthRun($("#fifthInput").val());
});

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

function firstRun(input)
{
	let result = validateFirst(input);
	if(result)
	{
		$("#firstIcon").removeClass("fa-times-circle");
		$("#firstIcon").addClass("fa-check-circle");
	}
	else
	{
		$("#firstIcon").removeClass("fa-check-circle");
		$("#firstIcon").addClass("fa-times-circle");
	}
}

function secondRun(input)
{
	let result = validateSecond(input);
	if (Array.isArray(result))
	{
		$("#secondAlert").html("<div class='alert alert-success'>" + result.toString() + "</div>");
		$("#secondAlert").show();
	}
	else
	{
		$("#secondAlert").html("<div class='alert alert-danger'>" + result + "</div>");
		$("#secondAlert").show();
	}
}

function thirdRun(input)
{
	let result = validateThird(input);
	if (Array.isArray(result))
	{
		$("#thirdAlert").html("<div class='alert alert-success'>" + result.toString() + "</div>");
		$("#thirdAlert").show();
	}
	else
	{
		$("#thirdAlert").html("<div class='alert alert-danger'>" + result + "</div>");
		$("#thirdAlert").show();
	}
}

function forthRun(input)
{
	$("#forthInputGroup").removeClass("has-error");
	$("#forthInputGroup").removeClass("has-success");
	$("#forthInputGroup").addClass("has-warning");
	$("#forthText").text("Parsing...");
	fillMaize("Orange");

	setTimeout(function()
	{
		let result = validateForth(input);
		if (result)
		{
			$("#forthInputGroup").removeClass("has-error");
			$("#forthInputGroup").removeClass("has-warning");
			$("#forthInputGroup").addClass("has-success");
			$("#forthText").text("Success");
		}
		else
		{
			$("#forthInputGroup").removeClass("has-success");
			$("#forthInputGroup").removeClass("has-warning");
			$("#forthInputGroup").addClass("has-error");
			fillMaize("Red");
		}
	}, 100);
}

function fifthRun(input)
{
	let result = validateFifth(input);
	if (!isNaN(result))
	{
		$("#fifthAlert").html("<div class='alert alert-success'>" + result.toString() + "</div>");
		$("#fifthAlert").show();
	}
	else
	{
		$("#fifthAlert").html("<div class='alert alert-danger'>" + result + "</div>");
		$("#fifthAlert").show();
	}
}

function validateFirst(input)
{
	let result = false;
	//Value and position
	let first = [];
	console.log("Parsing string '" + input + "'");
	for (let i = 0; i < input.length; ++i)
	{
		let tmp = parseInt(input[i]);
		if (!isNaN(tmp))
		{
			console.log(input[i] + ": Is a number");
			if (first[0] && (tmp + first[0] === 10))
			{
				console.log("first is not empty and tmp + first === 10 (" + tmp + " + " + first[0] + " === " + (tmp + first[0]));
				console.log("Finding questions...");
				//Iterate backwards to see how many question marks exist between the pair
				let questions = 0;
				for (let j = i; j > first[1]; --j)
				{
					if (input[j] === '?')
					{
						++questions;
						console.log(input[j] + ": Is a question. question total is now " + questions);
					}
					else
					{
						console.log(input[j] + ": Is not a question.");
					}
				}
				if (questions === 3)
				{
					console.log("questions === 3! result is now true.");
					result = true;
				}
				else
				{
					console.log("questions !== 3. result is false and breaking.");
					result = false;
					break;
				}
			}
			first[0] = tmp;
			first[1] = i;
		}
		else
		{
			console.log(input[i] + ": Is not a number");
		}
	}
	return result;
}

function validateSecond(input)
{
	//First, generate the array
	let array = input.trim().split("\n");
	console.log("Parsing array");
	console.log(array);
	for (let i = 1; i < array.length; ++i)
	{
		if (array[i].length !== array[0].length)
		{
			console.log("Invalid array");
			return "Arrays cannot have differing lengths.";
		}
	}

	for (let i = 0; i < array.length - 1; ++i)
	{
		for (let j = 0; j < array[i].length - 1; ++j)
		{
			console.log("Checking " + array[i][j]);
			if (isVowel(array[i][j]) && isVowel(array[i + 1][j]) && isVowel(array[i][j + 1]) && isVowel(array[i + 1][j + 1]))
			{
				return [i, j];
			}
		}
	}
	return "None found."
}

function validateThird(input)
{
	//First, generate the array
	let tmparray = input.trim().split("\n");
	let array = [];
	array[0] = tmparray[0].split(",");
	array[1] = tmparray[1].split(",");
	console.log("Parsing array");
	console.log(array);
	if ((array.length === 2) && (array[0].length === 2))
	{
		let diff = Math.abs(parseInt(array[0][0]) - parseInt(array[0][1]));
		console.log("diff = " + diff);
		//First, check to see if the weight is included:
		for (let i = 0; i < array[1].length; ++i)
		{
			console.log("Checking " + parseInt(array[1][i]));
			if (parseInt(array[1][i]) === diff)
			{
				return [array[1][i]];
			}
		}
		//Finally, check to see if any weights added together will equal the diff
		for (let i = 0; i < array[1].length; ++i)
		{
			let tmp = parseInt(array[1][i]);
			for (let j = i + 1; j < array[1].length; ++j)
			{
				if ((tmp + parseInt(array[1][j]) === diff) || (Math.abs(tmp - parseInt(array[1][j])) === diff))
				{
					return [array[1][i], array[1][j]];
				}
			}
		}
		return "Not possible";
	}
	else
	{
		return "Input must be two arrays; the first of which must be a length of two."
	}
}

function isVowel(char)
{
	return ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u'));
}

function validateForth(input)
{
	let vals = [];
	let array = [];
	if (input.length < 8)
	{
		console.log("Not long enough");
		$("#forthText").text("Input must be at least 8 characters long.");
		return false;
	}
	//Find all question marks first
	console.log("Finding question marks in " + input);
	let found = false;
	for (let i = 0; i < input.length; ++i)
	{
		if (input[i] === '?')
		{
			found = true;
			console.log("Question mark found at " + i);
			vals.push(i);
			array.push('r');
			console.log("vals now equals");
			console.log(vals);
			console.log("array now equals");
			console.log(array);
		}
		else
		{
			console.log("Adding " + input[i]);
			array.push(input[i]);
			console.log("array now equals");
			console.log(array);
		}
	}
	if (!found)
	{
		console.log("No question marks found.");
		$("#forthText").text("Input must include at least one question mark.");
		return false;
	}
	let total = Math.pow(4, vals.length);
	for (let i = 0; i < total; ++i)
	{
		if (increase(array, vals))
		{
			return true;
		}
	}
	$("#forthText").text("Not possible.");
	return false;
}

function testMaize(input)
{
	let x = 0, y = 0, cells = document.getElementById("maize").getElementsByTagName("td");
	fillMaize("White");
	cells[0].style.backgroundColor = "Red";
	let r = 255;
	let g = 0;
	let diff = 255 / input.length;
	for (let i = 0; i < input.length; ++i)
	{
		switch (input[i])
		{
			case 'r':
				++x;
				break;
			case 'l':
				--x;
				break;
			case 'u':
				++y;
				break;
			case 'd':
				--y;
				break;
			default:
				return false;
		}
		if ((x > 4) || (x < 0) || (y > 0) || (y < -4))
		{
			return false;
		}
		if (cells[x + (5 * Math.abs(y))].style.backgroundColor !== "white")
		{
			return false;
		}
		r -= diff;
		g += diff;
		cells[x + (5 * Math.abs(y))].style.backgroundColor = "rgb(" + r + "," + g + "," + 0 + ")";
	}
	return (x === 4) && (y === -4);
}

function increase(array, vals)
{
	switch (array[vals[0]])
	{
		case 'r':
			array[vals[0]] = 'l';
			break;
		case 'l':
			array[vals[0]] = 'u';
			break;
		case 'u':
			array[vals[0]] = 'd';
			break;
		case 'd':
			array[vals[0]] = 'r';
			break;
	}
	if ((array[vals[0]] === 'r') && (vals.length > 1))
	{
		increase(array, vals.slice(1))
	}
	return testMaize(array);
}

function fillMaize(color)
{
	let cells = document.getElementById("maize").getElementsByTagName("td");
	for (let i = 0; i < 25; ++i)
	{
		cells[i].style.backgroundColor = color;
	}
}

function validateFifth(input)
{
	let one = [];
	let twos = [];
	let array = input.trim().split("\n");
	let foundTwo = false;
	let foundOne = false;
	console.log("Parsing array");
	console.log(array);
	for (let i = 0; i < array.length; ++i)
	{
		if (array[i].length !== array[0].length)
		{
			console.log("Invalid array");
			return "Arrays cannot have differing lengths.";
		}
		for (let j = 0; j < array[i].length; ++j)
		{
			if (array[i][j] === '2')
			{
				foundTwo = true;
				console.log("Found 2 at " + [i,j]);
				twos.push([i,j]);
			}
			if (array[i][j] === '1')
			{
				if (!foundOne)
				{
					console.log("Found 1 at " + [i, j]);
					one = [i, j];
					foundOne = true;
				}
				else
				{
					console.log("Invalid array");
					return "Cannot have multiple ones in the array.";
				}
			}
		}
	}
	if (!foundOne)
	{
		console.log("Invalid array");
		return "Missing '1'.";
	}

	let minDistance = null;
	for (let i = 0; i < twos.length; ++i)
	{
		console.log("Finding distance for " + twos[i]);
		let x = Math.min(array[0].length - (Math.abs(one[0] - twos[i][0])), (Math.abs(one[0] - twos[i][0])));
		console.log("x distance: " + x);
		let y = Math.min(array[0].length - (Math.abs(one[1] - twos[i][1])), (Math.abs(one[1] - twos[i][1])));
		console.log("y distance: " + y);
		if ((x + y < minDistance) || !minDistance)
		{
			console.log("New minDistance is " + (x + y));
			minDistance = x + y;
		}
	}
	return minDistance;
}