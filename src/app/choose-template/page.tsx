'use client' // we need this to be a client component because nhsuk-react-components uses client-only react features
import { Radios, Button, ErrorSummary, ErrorMessage,  } from 'nhsuk-react-components';
import { useFormState } from 'react-dom';
import { chooseTemplateServerAction, FormState } from './choose-template-server-action';
import { chooseTemplatePageContent } from '../../content/content';

export default function ChooseTemplatePage() {
    const { pageHeading, errorHeading, options } = chooseTemplatePageContent;
    const [state, action] = useFormState<FormState, FormData>(chooseTemplateServerAction, { formErrors: [], fieldErrors: {}});
    console.log(state);
    console.log(Object.entries(state.fieldErrors));
    const hasError = state.formErrors.length > 0 || Object.keys(state.fieldErrors).length > 0;
    return (
        <>
            {hasError && (
            <div>
                <ErrorSummary>
                    <ErrorSummary.Title data-testid='error-summary'>
                        {errorHeading}
                    </ErrorSummary.Title>
                    <ErrorSummary.List>
                        {
                            Object.entries(state.fieldErrors).map(([id, errors]) => (
                                <ErrorSummary.Item href='#choose-template' key={`field-error-summary-${id}`}>{errors.join(', ')}</ErrorSummary.Item>
                            ))
                        }
                        {
                            Object.entries(state.formErrors).map((error, id) => (
                                <ErrorSummary.Item key={`form-error-summary-${id}`}>{error}</ErrorSummary.Item>
                            ))
                        }
                    </ErrorSummary.List>
                </ErrorSummary>
            </div>
            ) }
            <form action={action}>
                <div className={state.fieldErrors['choose-template'] ? 'nhsuk-form-group--error' : ''}>
                    <h2 className='nhsuk-heading-l'>
                        {pageHeading}
                    </h2>
                    {
                        state.fieldErrors['choose-template'] && <ErrorMessage data-testid='error-message'>
                            {state.fieldErrors['choose-template']}
                        </ErrorMessage>
                    }
                    <Radios id='choose-template-id' name='choose-template'>
                        {
                            options.map(({ id, text }) => (
                                <Radios.Radio value={id} data-testid={`${id}-radio`} key={`${id}-radio`}>
                                    {text}
                                </Radios.Radio>
                            ))
                        }
                    </Radios>
                </div>
                <Button type='submit' data-testid='submit-button'>Continue</Button>
            </form>
        </>
    );
}
