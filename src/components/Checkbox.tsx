export const Checkbox = ({
  description,
  value,
  setter,
}: {
  description: string;
  value: boolean;
  setter: (value: boolean) => void;
}) => {
  return (
    <div>
      <p>
        {description} mode: {value ? 'on' : 'off'}{' '}
        <span>
          <input
            type='checkbox'
            checked={value}
            onChange={() => {
              setter(!value);
            }}
          />
        </span>
      </p>
    </div>
  );
};
