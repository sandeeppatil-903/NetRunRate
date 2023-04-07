function addNumbers() {
  // Get the values of the input fields
  const match1 = parseFloat(document.getElementById("match1").value);
  const match2 = parseFloat(document.getElementById("match2").value);
  const match3 = parseFloat(document.getElementById("match3").value);
  const match4 = parseFloat(document.getElementById("match4").value);
  const match5 = parseFloat(document.getElementById("match5").value);
  const over1 = parseFloat(document.getElementById("over1").value);
  const over2 = parseFloat(document.getElementById("over2").value);
  const over3 = parseFloat(document.getElementById("over3").value);
  const over4 = parseFloat(document.getElementById("over4").value);
  const over5 = parseFloat(document.getElementById("over5").value);
  const team1 = parseFloat(document.getElementById("team1").value);
  const team2 = parseFloat(document.getElementById("team2").value);
  const team3 = parseFloat(document.getElementById("team3").value);
  const team4 = parseFloat(document.getElementById("team4").value);
  const team5 = parseFloat(document.getElementById("team5").value);
  const overbowled1 = parseFloat(document.getElementById("overbowled1").value);
  const overbowled2 = parseFloat(document.getElementById("overbowled2").value);
  const overbowled3 = parseFloat(document.getElementById("overbowled3").value);
  const overbowled4 = parseFloat(document.getElementById("overbowled4").value);
  const overbowled5 = parseFloat(document.getElementById("overbowled5").value);

  // Add the values together
  const sum1 = match1 + match2 + match3 + match4 + match5;
  const sum2 = over1 + over2 + over3 + over4 + over5;
  const sum3 = team1 + team2 + team3 + team4 + team5;
  const sum4 =
    overbowled1 + overbowled2 + overbowled3 + overbowled4 + overbowled5;
  const nrr = (sum1 / sum2 - sum3 / sum4).toFixed(3);

  // Display the result to the user
  document.getElementById("result5").textContent = `Net Runrate = ${nrr}.`;
}
