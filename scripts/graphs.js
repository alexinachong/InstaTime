var ctx = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Raleway";
Chart.defaults.global.defaultFontSize = 48;

var postData = {
  datasets: [{
    label: ['Instagram Posts by Time of Day'],
    data: [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 80,
      y: 80,
      r: 50
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }],
    backgroundColor: "#4682B4",
    hoverBackgroundColor: "#38678F",
    hoverBorderColor: "#FFD700",
    hoverBorderWidth: 5,
    hoverRadius: 5
  }]
};

var bubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: postData,
  options: {
    responsive: true
  }
});
