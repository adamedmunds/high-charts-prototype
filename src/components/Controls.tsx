import { Checkbox } from './Checkbox';
import { NumberInput } from './NumberInput';
import {
  generateDoubleHighchartsData,
  generateSingleHighchartsData,
} from './utils/dataGenerator';

export const Controls = ({
  data,
  setData,
  isRealTime,
  setIsRealTime,
  boosted,
  setBoosted,
  mode,
}: {
  data: number[] | [number, number][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: (value: any) => void;
  isRealTime: boolean;
  setIsRealTime: (value: boolean) => void;
  boosted: boolean;
  setBoosted: (value: boolean) => void;
  mode: 'single' | 'double';
}) => {
  return (
    <div>
      <p>
        This chart uses Highcharts library v4 with React. The data is generated
        on the client side.
      </p>
      <button
        onClick={() =>
          setData(
            mode === 'single'
              ? generateSingleHighchartsData(data.length)
              : generateDoubleHighchartsData(data.length)
          )
        }
      >
        Regenerate {data.length} Data Points
      </button>
      <Checkbox
        description='realtime'
        value={isRealTime}
        setter={setIsRealTime}
      />
      <Checkbox description='boosted' value={boosted} setter={setBoosted} />
      <NumberInput
        description='Number of data points'
        data={data}
        setter={setData}
        mode={mode}
      />
    </div>
  );
};
