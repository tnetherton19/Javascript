// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

function buildTable(dataToRender) {
    tbody.html("")
    dataToRender.forEach(function(ufoData) {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

buildTable(tableData);
console.log("ufo table rendered");

function handleClick() {
    d3.event.preventDefault();

    var inputDateElement = d3.select("#DATE/TIME");
    var inputDate = inputDateElement.property("VALUE");

    var inputCityElement = d3.select("#CITY");
    var inputCity = inputCityElement.property("VALUE");

    var inputStateElement = d3.select("#STATE");
    var inputState = inputStateElement.property("VALUE");

    var inputCountryElement = d3.select("#COUNTRY");
    var inputCountry = inputCountryElement.property("VALUE");

    var inputShapeElement = d3.select("#s=SHAPE");
    var inputShape = inputShapeElement.property("VALUE");

    var filteredData = tableData;
    if (inputDate != "") {
        filteredData = filteredData.filter(ufoData => ufoData.datetime === inputDate);
    }
    if (inputCity != "") {
        filteredData = filteredData.filter(ufoData => ufoData.city === inputCity);
    }
    if (inputState != "") {
        filteredData = filteredData.filter(ufoData => ufoData.state === inputState);
    }
    if (inputCountry != "") {
        filteredData = filteredData.filter(ufoData => ufoData.country === inputCountry);
    }
    if (inputShape != "") {
        filteredData = filteredData.filter(ufoData => ufoData.shape === inputShape);
    }
    buildTable(filteredData);
}
button.on('click', handleClick);
