import { Chart } from '@highcharts/react';
import { ScatterSeries } from '@highcharts/react/series/Scatter';
import * as Highcharts from 'highcharts';
import 'highcharts/modules/boost';
import { useEffect, useMemo, useState } from 'react';
import { Controls } from '../Controls';
import { generateDoubleHighchartsData } from '../utils/dataGenerator';

export const ScatterChart = () => {
  const [data, setData] = useState<[number, number][]>([]);
  const [isRealTime, setIsRealTime] = useState<boolean>(false);
  const [boosted, setBoosted] = useState<boolean>(true);

  useMemo(() => {
    setData(generateDoubleHighchartsData(1000));
  }, []);

  useEffect(() => {
    if (isRealTime) {
      const interval = setInterval(() => {
        setData((prevData) => [
          ...prevData,
          [Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
        ]);
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
        <ScatterSeries data={data} />
      </Chart>
      <Controls
        data={data}
        setData={setData}
        isRealTime={isRealTime}
        setIsRealTime={setIsRealTime}
        boosted={boosted}
        setBoosted={setBoosted}
        mode='double'
      />
    </>
  );
};
