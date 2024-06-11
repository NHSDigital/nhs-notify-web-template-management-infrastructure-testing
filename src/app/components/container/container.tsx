export async function NHSNotifyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='nhsuk-width-container app-width-container'>
      <div className='nhsuk-main-wrapper'>{children}</div>
    </div>
  );
}
