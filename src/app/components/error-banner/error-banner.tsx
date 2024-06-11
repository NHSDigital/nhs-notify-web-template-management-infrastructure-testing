import { ErrorSummary } from 'nhsuk-react-components';

export function NHSNotifyErrorBanner() {
  return (
    <ErrorSummary>
      <ErrorSummary.Title>
        There are validation errors on the page
      </ErrorSummary.Title>
    </ErrorSummary>
  );
}
