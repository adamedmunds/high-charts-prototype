import { Chart, setHighcharts } from '@highcharts/react';
import * as Highcharts from 'highcharts/highcharts';
import 'highcharts/modules/boost';
import 'highcharts/highcharts-more';
import { useEffect, useMemo, useState } from 'react';
import { Controls } from '../Controls';
import { generateSingleHighchartsData } from '../utils/dataGenerator';

setHighcharts(Highcharts);

// Boosted mode does not seem to work with Polar charts
export const Polar = () => {
  const [data, setData] = useState<number[]>([]);
  const [isRealTime, setIsRealTime] = useState<boolean>(false);
  const [boosted, setBoosted] = useState<boolean>(false);

  useMemo(() => {
    setData(generateSingleHighchartsData(100));
  }, []);

  useEffect(() => {
    if (isRealTime) {
      const interval = setInterval(() => {
        setData((prevData) => [...prevData, Math.round(Math.random() * 100)]);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRealTime]);

  return (
    <>
      <Chart
        highcharts={Highcharts}
        options={{
          boost: {
            useGPUTranslations: true,
            seriesThreshold: 1,
            enabled: boosted,
          },
          chart: {
            polar: true,
            type: 'column',
          },
          series: [
            {
              type: 'column',
              name: 'Random Data',
              data: data,
            },
          ],
        }}
      ></Chart>
      <Controls
        data={data}
        setData={setData}
        isRealTime={isRealTime}
        setIsRealTime={setIsRealTime}
        boosted={boosted}
        setBoosted={setBoosted}
        mode='single'
      />
    </>
  );
};
