/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from 'react-hot-toast';

export const handleError = (error: any) => {
  if (error.validationErrors) {
    // Handle validation errors
    toast.error('Validation Error');
    // Optionally set validation errors in state
    return { type: 'validation', messages: error.validationErrors };
  } else {
    // Handle general errors
    toast.error(error.message);
    return { type: 'general', message: error.message };
  }
};

export const hasEmptyValues = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      return true;
    }
  }
  return false;
};

export const areObjectsEqual = (obj1: any, obj2: any) => {
  if (obj1 === obj2) {
    return true;
  }

  if (
    obj1 == null ||
    typeof obj1 !== 'object' ||
    obj2 == null ||
    typeof obj2 !== 'object'
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

export const arraysEqual = (arr1: any[], arr2: any[]) => {
  if (arr1 === arr2) {
    return true;
  }

  if (arr1 == null || arr2 == null) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!arraysEqual(arr1[i], arr2[i])) {
        return false;
      }
    } else if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
      if (!areObjectsEqual(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

export const snakeToTitleCase = (text: string) => {
  return text
    .toLowerCase() // Ensure the text is in lowercase
    .split('_') // Split the string by underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words with spaces
};
