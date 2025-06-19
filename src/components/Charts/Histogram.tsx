import { Chart, setHighcharts } from '@highcharts/react';
import { HistogramSeries } from '@highcharts/react/series/Histogram';
import * as Highcharts from 'highcharts/highcharts';
import 'highcharts/modules/boost';
import 'highcharts/modules/histogram-bellcurve';
import { useEffect, useMemo, useState } from 'react';
import { generateSingleHighchartsData } from '../utils/dataGenerator';
import { Controls } from '../Controls';

setHighcharts(Highcharts);

// Boosted mode does not seem to work with Histogram

export const Histogram = () => {
  const [data, setData] = useState<number[]>([]);
  const [isRealTime, setIsRealTime] = useState<boolean>(false);
  const [boosted, setBoosted] = useState<boolean>(true);

  useMemo(() => {
    setData(generateSingleHighchartsData(1000));
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
        }}
      >
        <HistogramSeries data={data} />
      </Chart>
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
