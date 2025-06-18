import { Chart, Series, Title } from '@highcharts/react';
import * as Highcharts from 'highcharts';
import 'highcharts/modules/boost';
import { useEffect, useMemo, useState } from 'react';
import { generateSingleHighchartsData } from '../utils/dataGenerator';

export const ChartComponent = () => {
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
      <div>
        <p>
          This chart uses Highcharts with React. The data is generated on the
          client side.
        </p>
        <button
          onClick={() => setData(generateSingleHighchartsData(data.length))}
        >
          Regenerate {data.length} Data Points
        </button>
        <p>Realtime mode: {isRealTime.toString()}</p>
        <input
          type='checkbox'
          checked={isRealTime}
          onChange={() => {
            setIsRealTime(!isRealTime);
          }}
        />
        <label>Enable Realtime Mode</label>

        <p>Boost mode: {boosted.toString()}</p>
        <input
          type='checkbox'
          checked={boosted}
          onChange={() => {
            setBoosted(!boosted);
          }}
        />
        <label>Enable Boosted Mode</label>
      </div>
    </>
  );
};
