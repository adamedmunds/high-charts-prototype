import HighchartsReact from 'highcharts-react-official';
import 'highcharts/modules/boost';
import Highcharts from 'highcharts';
import { generateSingleHighchartsData } from '../utils/dataGenerator';

const options = {
  title: {
    text: 'My stock chart',
  },
  series: [
    {
      data: generateSingleHighchartsData(10000),
    },
  ],
  boost: {
    useGPUTranslations: true,
    seriesThreshold: 1,
  },
};

export const OldChart = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType='chart'
      options={options}
    />
  );
};
