import {
  generateDoubleHighchartsData,
  generateSingleHighchartsData,
} from './utils/dataGenerator';

export const NumberInput = ({
  description,
  data,
  setter,
  mode = 'single',
}: {
  description: string;
  data: number[] | [number, number][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setter: (value: any) => void;
  mode: 'single' | 'double';
}) => {
  return (
    <div>
      <p>
        {description}: {data.length}
      </p>
      <input
        type='input'
        value={data.length}
        onChange={(event) => {
          console.log(typeof data);

          const values =
            mode === 'single'
              ? generateSingleHighchartsData(Number(event.target.value))
              : generateDoubleHighchartsData(Number(event.target.value));
          setter(values);
        }}
      />
    </div>
  );
};
