
function MakeTable(){
  var H_start = Number(document.getElementById('HorizonStartRow').value)
  var H_end = Number(document.getElementById('HorizonEndRow').value)
  var V_start = Number(document.getElementById('VerticalStartRow').value)
  var V_end = Number(document.getElementById('VerticleEndRow').value)

  console.log("Horizontal start: ", H_start, "Horizontal end: ", H_end,
              "Vertical start: ", V_start, "Vertical end: ", V_end);


  if(H_start > H_end){
    let tmp = H_start;
    H_start = H_end;
    H_end = tmp;
  }

  if(V_start > V_end){
    let tmp = V_start;
    V_start = V_end;
    V_end = tmp;
  }

  console.log("Horizontal start: ", H_start, "Horizontal end: ", H_end,
              "Vertical start: ", V_start, "Vertical end: ", V_end);

  if(H_start < -50 || H_end > 50 || V_start < -50 || V_end > 50){
     alert("Sorry, but valid input is a number between -50 and 50.");
  }

  var matrix = {};
  var rowCount = Math.abs(H_end - H_start);
  var columnCount = Math.abs(V_end - V_start);

  console.log("Horizontal row: ", rowCount, "Horizontal row: ", columnCount);

  var H_value = H_start;
  var V_value = V_start;

//  console.log("Value: ", H_value, "value:", V_value);
  for (var x = 0; x <= columnCount; x++){
    tmp_array= [];
    for(var y = 0; y <= rowCount; y++){
      var total = H_value * V_value;
      //console.log("The array looks like:\n", total);
      tmp_array[y] = total;
      H_value++;
    }
    matrix["rowCount" + x] = tmp_array;
    H_value = H_start;
    V_value ++;
  }

  create_table(matrix);
  return false;
  //console.table(matrix);
  //console.log("The array looks like:\n", matrix);
}



function create_table(matrix){

  var H_start = Number(document.getElementById('HorizonStartRow').value)
  var H_end = Number(document.getElementById('HorizonEndRow').value)
  var V_start = Number(document.getElementById('VerticalStartRow').value)
  var V_end = Number(document.getElementById('VerticleEndRow').value)

  console.log("Horizontal start: ", H_start, "Horizontal end: ", H_end,
              "Vertical start: ", V_start, "Vertical end: ", V_end);


  if(H_start > H_end){
    let tmp = H_start;
    H_start = H_end;
    H_end = tmp;
  }

  var rowCount = Math.abs(H_end - H_start);
  var columnCount = Math.abs(V_end - V_start);

  var contents = "";

  contents += "<table>";
  contents += "<tr><td></td>";

  for (var a = H_start; a <= H_end; a++) {
    contents += "<td>" + a + "</td>";
  }

  contents += "</tr>";
  var column = V_start;

  for (var i = 0; i <= columnCount; i++) {

    contents += "<tr><td>" + column + "</td>";

    for (var j = 0; j <= rowCount; j++) {
      contents += "<td>" + matrix["rowCount" + i][j] + "</td>";
    }
    column++;
    contents += "</tr>";
  }
  contents += "</table>";
  $("#MultiTable").html(contents);
}
