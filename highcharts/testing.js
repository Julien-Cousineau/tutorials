let series =[
{name:'0.5 m/s',data:[1,2,3,4],color: '#FF0000'},
{name:'0.5-2 m/s',data:[5,6,7,8]},
{name:'2-4 m/s',data:[5,6,7,8]},
{name:'4-6 m/s',data:[5,6,7,8]},
]
/* let data = [1,2,3,4]; */
// Parse the data from an inline table using the Highcharts Data plugin
new Highcharts.Chart({
    //data: data,
		series:series,
    chart: {
        polar: true,
        renderTo: 'container',
        type: 'column',
        events:{
        selection:function(e){console.log("OK2")},
        click:function(e){console.log("OK")},
        }
    },

    title: {
        text: 'Wind rose for South Shore Met Station, Oregon'
    },

    subtitle: {
        text: 'Source: or.water.usgs.gov'
    },

    pane: {
        size: '85%'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
        layout: 'vertical'
    },

    xAxis: {
    categories: ['N','E','S','W'],
        tickmarkPlacement: 'on'
    },

    yAxis: {
        min: 0,
        endOnTick: false,
        showLastLabel: true,
        title: {
            text: 'Frequency (%)'
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        reversedStacks: false
    },

    tooltip: {
        valueSuffix: '%'
    },

    plotOptions: {
        series: {
            stacking: 'normal',
            shadow: false,
            groupPadding: 0,
            pointPlacement: 'on'
        }
    }
});