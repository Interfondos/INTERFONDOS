google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['IFB Libre Disponibilidad Soles', 10],
    ['IF Extra conservador', 6],
    ['IF Extra Conervador', 8],
       
  ]);

  var options = {
    title: 'Tienes 3 fondos soles distribuidos de la siguiente manera:',
    pieHole: 0.6,
    colors: ['#0d8cff', '#2ec8ff', '#21ebbe'],
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
