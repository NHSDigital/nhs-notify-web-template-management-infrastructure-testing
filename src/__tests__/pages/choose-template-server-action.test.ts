import { mockDeep } from 'jest-mock-extended';
import { redirect } from 'next/navigation';
import { chooseTemplateServerAction } from '../../app/choose-template/choose-template-server-action';


jest.mock('next/navigation');

test('redirects to the given page when an option is selected', async () => {
    const mockFormData = mockDeep<FormData>({
        get: () => 'sms'
    });

    const mockRedirect = jest.mocked(redirect);

    chooseTemplateServerAction({}, mockFormData);

    expect(mockRedirect).toHaveBeenCalledWith('/create-template/sms');
});

test('returns a validation error when no option is given', async () => {
    const mockFormData = mockDeep<FormData>({
        get: () => null
    });

    const response = chooseTemplateServerAction({}, mockFormData);

    expect(response).toEqual({
        formValidationError: {
            heading: 'There is a problem',
            error: 'Select a template type',
        },
        componentValidationErrors: {
            'choose-template': 'Select a template type'
        },
    });
});

test('returns a validation error when an invalid option is given', async () => {
    const mockFormData = mockDeep<FormData>({
        get: () => 'carrier pigeon'
    });

    const response = chooseTemplateServerAction({}, mockFormData);

    expect(response).toEqual({
        formValidationError: {
            heading: 'There is a problem',
            error: 'Select a template type',
        },
        componentValidationErrors: {
            'choose-template': 'Select a template type'
        },
    });
});
