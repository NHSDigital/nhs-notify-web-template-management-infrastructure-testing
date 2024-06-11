import { Fieldset, Radios } from 'nhsuk-react-components';

export function NHSNotifyRadioButtons({
  header,
  options,
  listId,
  initialSelection,
  hint,
  error,
}: {
  header: string;
  options: Array<{ value: string; name: string }>;
  listId: string;
  initialSelection: string | undefined;
  hint?: string;
  error?: string;
}) {
  return (
    <Fieldset>
      <Fieldset.Legend isPageHeading={true} size='l'>
        {header}
      </Fieldset.Legend>
      <Radios name={listId} id={listId} hint={hint} error={error}>
        {options.map((option, index) => (
          <Radios.Radio
            key={`${listId}_${index}`}
            value={option.value}
            defaultChecked={
              initialSelection && option.value === initialSelection
                ? true
                : undefined
            }
          >
            {option.name}
          </Radios.Radio>
        ))}
      </Radios>
    </Fieldset>
  );
}
