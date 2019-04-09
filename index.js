var dataP = d3.json("https://ghibliapi.herokuapp.com/vehicles")

dataP.then(function(data){
    console.log("data", data);
    drawTable(data);
  },
function(err)
{
  console.log(err);
});

var drawTable = function(data)
{
  //headers
  var table =  "<table>"
  //table.style.borderWidth = "1px";
  table+= "<th style='text-align: center;font size= 100px'><u> Studio Ghibli Vehicles</u> </th>"
  table+="<tr><td style='width: 100px; color: black;text-align: center;'>Name</td>";
  table+= "<td style='width: 100px; color: black; text-align: center; '>Description</td>";
  table+="<td style='width: 100px; color: black;text-align: center;'>Vehicle Class</td>";
  table+="<td style='width: 100px; color: black;text-align: center;'>Length</td></tr>";

  //underlines
  table+="<tr><td style='width: 100px;text-align: center;'>--------------</td>";
  table+="<td style='width: 100pxtext-align: center;;'>--------------</td>";
  table+="<td style='width: 100px;text-align: center;'>-----------------</td>";
  table+="<td style='width: 100px;text-align: center;'>---------</td></tr>";

  //data
  table+= "<tr><td style='width: 100px; color: black; text-align: center;'>" + data[0].name+"</td>";
  table+= "<td style='width: 100px; color: black; text-align: left;'>" + data[0].description +"</td>";
  table+= "<td style='width: 100px; color: black; text-align: center;'>" + data[0].vehicle_class +"</td>";
  table+= "<td style='width: 100px; color: black; text-align: center;'>" + data[0].length +"</td></tr>";
  table +="<br>"

  table+= "<tr><td style='width: 100px; color: black; text-align: center;'>" + data[1].name+"</td>";
  table+= "<td style='width: 100px; color: black; text-align: left;'>" + data[1].description +"</td>";
  table+= "<td style='width: 100px; color: black; text-align: center;'>" + data[1].vehicle_class +"</td>";
  table+= "<td style='width: 100px; color: black; text-align: center;'>" + data[1].length +"</td></tr>";

  table+= "<tr><td style='width: 100px; color: black; text-align: center;'>" + data[2].name+"</td>";
  table+= "<td style='width: 100px; color: black; text-align: left;'>" + data[2].description +"</td>";
  table+= "<td style='width: 100px; color: black; text-align: center;'>" + data[2].vehicle_class +"</td>";
  table+= "<td style='width: 100px; color: black; text-align: center;'>" + data[2].length +"</td></tr>";

  document.write(table);
};
