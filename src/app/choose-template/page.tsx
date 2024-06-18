'use client' // we need this to be a client component because nhsuk-react-components uses client-only react features
import { Radios, Button, ErrorSummary, ErrorMessage,  } from 'nhsuk-react-components';
import { useFormState } from 'react-dom';
import { chooseTemplateServerAction, FormState } from './choose-template-server-action';
import Link from 'next/link';

export default function ChooseTemplatePage() {
    const [state, action] = useFormState<FormState, FormData>(chooseTemplateServerAction, {});
    return (
        <>
            {state?.formValidationError ? (
            <div>
                <ErrorSummary>
                    <ErrorSummary.Title>
                        {state?.formValidationError.heading}
                    </ErrorSummary.Title>
                    <ErrorSummary.List>
                        <Link href='#choose-template' data-testid='error-summary' >{state?.formValidationError.error}</Link>
                    </ErrorSummary.List>
                </ErrorSummary>
            </div>
            ) : undefined}
            <form action={action}>
                <div className={state.componentValidationErrors?.['choose-template'] ? 'nhsuk-form-group--error' : ''}>
                    <h2 className='nhsuk-heading-l'>
                        Choose a template type to create
                    </h2>
                    {
                        state.componentValidationErrors?.['choose-template'] && <ErrorMessage data-testid='error-message'>
                            {state.componentValidationErrors['choose-template']}
                        </ErrorMessage>
                    }
                    <Radios id='choose-template-id' name='choose-template'>
                        <Radios.Radio value='nhs-app' data-testid='nhs-app-radio'>
                            NHS App message
                        </Radios.Radio>
                        <Radios.Radio value='email' data-testid='email-radio'>
                            Email
                        </Radios.Radio>
                        <Radios.Radio value='sms' data-testid='sms-radio'>
                            Text message (SMS)
                        </Radios.Radio>
                        <Radios.Radio value='letter' data-testid='letter-radio'>
                            Letter
                        </Radios.Radio>
                    </Radios>
                </div>
                <Button type='submit' data-testid='submit-button'>Continue</Button>
            </form>
        </>
    );
}
