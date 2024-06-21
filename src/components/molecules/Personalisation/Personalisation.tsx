import concatClassNames from '@/src/utils/concatClassNames';
import styles from './Personalisation.module.scss';
import content from '@/src/content/content';

const personalisationContent = content.components.personalisationComponent;

export type PersonalisationType = {
  isOpen?: boolean;
};

export function Personalisation({ isOpen }: PersonalisationType) {
  return (
    <>
      <h2
        className='nhsuk-heading-m nhsuk-u-margin-top-4'
        data-testid='personalisation-header'
      >
        {personalisationContent.header}
      </h2>
      <details
        className='nhsuk-details'
        data-testid='personalisation-details'
        open={isOpen ?? false}
      >
        <summary className='nhsuk-details__summary'>
          <span className='nhsuk-details__summary-text' data-testid='mm'>
            {personalisationContent.details.title}
          </span>
        </summary>
        <div className='nhsuk-details__text'>
          <p>{personalisationContent.details.text1}</p>
          <code className={styles.codeBackground}>
            {personalisationContent.details.codeBlockText}
          </code>
          <p className='nhsuk-u-margin-top-4'>
            {personalisationContent.details.text2}
            <br />
            {personalisationContent.details.text3}
          </p>
          <ul>
            {personalisationContent.details.list.map(({ id, item }) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
      </details>
    </>
  );
}
