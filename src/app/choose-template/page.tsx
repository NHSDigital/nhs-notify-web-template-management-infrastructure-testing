'use client' // we need this to be a client component because nhsuk-react-components uses client-only react features
import { Radios, Button, ErrorSummary } from 'nhsuk-react-components';
import { useFormState } from 'react-dom';
import { chooseTemplateServerAction, FormState } from '../../utils/choose-template-server-action';

export default function ChooseTemplatePage() {
    const [state, action] = useFormState<FormState, FormData>(chooseTemplateServerAction, {});

    return (
        <>
            {state?.validationError ? (
            <div>
                <ErrorSummary>
                    <ErrorSummary.Title>
                        {state?.validationError}
                    </ErrorSummary.Title>
                </ErrorSummary>
            </div>
            ) : undefined}
            <h2 className='nhsuk-heading-l' data-testid='page-sub-heading'>
                Choose a template type to create
            </h2>
            <form action={action}>
                <Radios id="choose-template-radios">
                    <Radios.Radio value="nhs-app" data-testid="nhs-app-radio">
                        NHS App message
                    </Radios.Radio>
                    <Radios.Radio value="email" data-testid="email-radio">
                        Email
                    </Radios.Radio>
                    <Radios.Radio value="sms" data-testid="sms-radio">
                        Text message (SMS)
                    </Radios.Radio>
                    <Radios.Radio value="letter" data-testid="letter-radio">
                        Letter
                    </Radios.Radio>
                </Radios>
                <Button type='submit' data-testid="submit-button">Continue</Button>
            </form>
        </>
    );
}
