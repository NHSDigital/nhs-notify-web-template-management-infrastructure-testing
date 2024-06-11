type button = React.ComponentProps<'button'> & { text?: string };

export function NHSNotifySubmitButton({ text = 'Submit', ...rest }: button) {
  return (
    <button
      {...rest}
      className='nhsuk-button'
      data-module='nhsuk-button'
      type='submit'
    >
      {text}
    </button>
  );
}
