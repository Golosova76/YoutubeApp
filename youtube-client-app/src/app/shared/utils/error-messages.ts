import { AbstractControl } from '@angular/forms';

interface ErrorMessages {
  [key: string]: {
    [key: string]: string;
  };
}

const errorMessages: ErrorMessages = {
  title: {
    required: 'Please enter a title',
    minlength: 'Title is too short',
    maxlength: 'Title is too long',
  },
  imgCard: {
    required: 'Please enter a link to the image',
  },
  linkVideo: {
    required: 'Please enter a link to the video',
  },
  createDate: {
    required: 'Please enter a creation date',
    futureDate: 'The date is invalid',
  },
  description: {
    maxlength: 'The description is too long',
  },
};

export function getErrorMessage(
  controlName: string,
  control: AbstractControl | null,
): string | null {
  if (!control || !control.errors) {
    return null;
  }

  const errorTypes = Object.keys(control.errors);
  for (const errorType of errorTypes) {
    if (errorMessages[controlName] && errorMessages[controlName][errorType]) {
      return errorMessages[controlName][errorType];
    }
  }

  return null;
}
