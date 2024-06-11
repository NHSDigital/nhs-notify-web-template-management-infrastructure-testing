import { getAllData } from '../../test-form/actions/form-actions';

const NumberPickers = async () => {
  const numberPicker = await getAllData();
  return (
    <ul>
      {numberPicker.map(({ numberPicker, id }, idx) => (
        <li key={`${id}-${idx}`}>{`${numberPicker}`}</li>
      ))}
    </ul>
  );
};

export default NumberPickers;
