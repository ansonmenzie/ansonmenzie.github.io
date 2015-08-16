
var StoreLocation = function(name, avgDonutsPerCust, minCust, maxCust) {
    this.name = name;
    this.avgDonutsPerCust = avgDonutsPerCust;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.dailyTotal = 0;
    this.addDailyTotal = function(donuts) {
      this.dailyTotal = this.dailyTotal + donuts;
    }
  };
    var generateRandom = function(minCust, maxCust) {
        return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
      };

      var donutsPerHour = function(minCust, maxCust, avgDonutsPerCust) {
        return (generateRandom(minCust, maxCust) * avgDonutsPerCust);
      };

      var shops = [];

      shops.push(new StoreLocation("Downtown", 4, 8, 43));
      shops.push(new StoreLocation("Capitol Hill", 3, 13, 39));
      shops.push(new StoreLocation("South Lake Union", 5, 24, 51));
      shops.push(new StoreLocation("Wedgewood", 4, 22, 34));
      shops.push(new StoreLocation("Ballard", 5, 18, 56));

      var renderRow = function(store) {
        var row, cell, donuts, tbl = document.getElementById("locations_table");
        row = document.createElement("tr");
        cell = document.createElement("td");
        cell.innerHTML = store.name;
        row.appendChild(cell);
        for(j = 0; j < 11; j++) {
          cell = document.createElement("td");
          donuts = donutsPerHour(store.minCust, store.maxCust, store.avgDonutsPerCust);
          shops[i].addDailyTotal(donuts);
          cell.innerHTML = donuts;
          row.appendChild(cell);
        }
        cell = document.createElement("td");
        cell.innerHTML = store.dailyTotal;
        row.appendChild(cell);
        tbl.appendChild(row);
      };

      for(i = 0; i < shops.length; i++) {
        renderRow(shops[i]);
      }

    var submit = document.getElementById("sub");
    submit.addEventListener("click", function() {
    var newLoc = document.getElementById("loc").value;
    var newAvg = parseInt(document.getElementById("avg").value);
    var newMin = parseInt(document.getElementById("min").value);
    var newMax = parseInt(document.getElementById("max").value);

    shops.push(new StoreLocation(newLoc, newAvg, newMin, newMax));
    for(i = shops.length - 1; i < shops.length; i++) {
      renderRow(shops[shops.length - 1]);
    }
  });
    if(renderRow(shops[shops.length - 1]) == renderRow(shops[i])) {
      renderRow(shops[i]);
    }



