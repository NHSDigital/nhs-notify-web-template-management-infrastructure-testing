'use server';
import { redirect } from 'next/navigation';

export type FormState = {
    formValidationError?: {
        heading: string;
        error: string;
    };
    componentValidationErrors?: Record<string, string>; // key is component identifier, value is error message
};

const validTemplateTypes: FormDataEntryValue[] = ['sms', 'email', 'nhs-app', 'letter'];

export const chooseTemplateServerAction = (_: {}, formData: FormData): FormState => {
    const templateType = formData.get('choose-template');

    if (!templateType || !validTemplateTypes.includes(templateType)) {
        return {
            formValidationError: {
                heading: 'There is a problem',
                error: 'Select a template type',
            },
            componentValidationErrors: {
                'choose-template': 'Select a template type'
            },
        }
    }
    redirect(`/create-template/${templateType}`);
}
