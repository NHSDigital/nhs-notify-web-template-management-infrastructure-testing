export function NHSNotifyConfirmationCard({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) {
  return (
    <div className='nhsuk-card'>
      <div className='nhsuk-card__content'>
        <h2 className='nhsuk-card__heading nhsuk-heading-s'>{heading}</h2>
        {description ? (
          <p className='nhsuk-card__description'>{description}</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
