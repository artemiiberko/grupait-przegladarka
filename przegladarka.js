document.querySelector("#gen").onclick = function () {
  let length = 20
  let min = 1
  let max = 100
  let array = []
  for (let i = 0; i < length; i++) {
    array.push(randomInteger(min, max))
  }

  par = array.filter((e) => e % 2 == 0)
  npar = array.filter((e) => e % 2 != 0)

  var html = "<table><tr><th>Parzyste</th><th>Nieparzyste</th></tr>"
  for (var i = 0; i < array.length; i++) {
    if (par[i]) {
      if (npar[i]) {
        html += "<tr><td>" + par[i] + "</td><td>" + npar[i] + "</td></tr>"
      } else {
        html += "<tr><td>" + par[i] + "</td><td></td></tr>"
      }
    } else {
      if (npar[i]) {
        html += "<tr><td></td><td>" + npar[i] + "</td></tr>"
      }
    }
  }
  html += "</table>"

  document.getElementById("tablica").innerHTML = html
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}
