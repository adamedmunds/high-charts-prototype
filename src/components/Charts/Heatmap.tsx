import { Chart, setHighcharts } from '@highcharts/react';
import * as Highcharts from 'highcharts/highcharts';
import 'highcharts/modules/heatmap';
import 'highcharts/modules/boost';
import 'highcharts/modules/boost-canvas.js';
import 'highcharts/modules/data.js';
import { useMemo, useState } from 'react';
import { generateTripleHighchartsData } from '../utils/dataGenerator';

setHighcharts(Highcharts);

export const Heatmap = () => {
  const [data, setData] = useState<[number, number, number][]>([]);

  useMemo(() => {
    setData(generateTripleHighchartsData(10));
  }, []);

  return (
    <>
      <Chart
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1,
          },

          boost: {
            useGPUTranslations: true,
          },

          title: {
            text: 'Sales per employee per weekday',
            style: {
              fontSize: '1em',
            },
          },

          xAxis: {
            categories: [
              'Alexander',
              'Marie',
              'Maximilian',
              'Sophia',
              'Lukas',
              'Maria',
              'Leon',
              'Anna',
              'Tim',
              'Laura',
            ],
          },

          yAxis: {
            categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
            title: null,
            reversed: true,
          },

          accessibility: {
            point: {
              descriptionFormat:
                '{(add index 1)}. ' +
                '{series.xAxis.categories.(x)} sales ' +
                '{series.yAxis.categories.(y)}, {value}.',
            },
          },

          colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#0000FF',
          },

          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280,
          },

          tooltip: {
            format:
              '<b>{series.xAxis.categories.(point.x)}</b> sold<br>' +
              '<b>{point.value}</b> items on <br>' +
              '<b>{series.yAxis.categories.(point.y)}</b>',
          },

          series: [
            {
              boostThreshold: 1,
              name: 'Sales per employee',
              borderWidth: 1,
              data: data,
              dataLabels: {
                enabled: true,
                color: '#000000',
              },
            },
          ],

          credits: {
            enabled: false,
          },
        }}
      />
    </>
  );
};
