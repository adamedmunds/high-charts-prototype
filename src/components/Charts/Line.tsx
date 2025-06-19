import { Chart, Series, Title, setHighcharts } from '@highcharts/react';
import * as Highcharts from 'highcharts/highcharts';
import 'highcharts/modules/boost';
import 'highcharts/modules/exporting.js';
import { useEffect, useMemo, useState } from 'react';
import { Controls } from '../Controls';
import { generateSingleHighchartsData } from '../utils/dataGenerator';

setHighcharts(Highcharts);

export const LineComponent = () => {
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
        <Title text='My Chart Title' />
        <Series type='line' data={data} />
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
