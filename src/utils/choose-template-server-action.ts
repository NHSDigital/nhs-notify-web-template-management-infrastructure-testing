'use server';
import { redirect } from 'next/navigation';

export type FormState = {
    validationError?: string;
};

const validTemplateTypes: FormDataEntryValue[] = ['sms', 'email', 'nhs-app', 'letter'];

export const chooseTemplateServerAction = (_: {}, formData: FormData) => {
    const templateType = formData.get('choose-template-radios');

    if (!templateType || !validTemplateTypes.includes(templateType)) {
        return {
            validationError: 'Please select an option'
        }
    }
    redirect(`/create-template/${formData.get('choose-template-radios')}`);
}