import { convertFootToCentimeter, convertCentimeterToFoot } from './unitConverter';


const mockFootInput = document.createElement('input');
const mockCentimeterInput = document.createElement('input');

mockFootInput.id = 'Footinput';
mockCentimeterInput.id = 'centimetersInput';

document.body.appendChild(mockFootInput);
document.body.appendChild(mockCentimeterInput);

// Test convertFootToCentimeter function
describe('convertFootToCentimeter', () => {
  test('should convert feet to centimeters correctly', () => {
    mockFootInput.value = '5'; 

    
    convertFootToCentimeter();

    expect(mockCentimeterInput.value).toBe('152.40');
  });

  // Simulates invalid user input
  test('should clear centimeters input if feet input is invalid', () => {
    mockFootInput.value = 'invalid input'; 

    convertFootToCentimeter();

    // Checks for empty field
    expect(mockCentimeterInput.value).toBe('');
  });
});

// Test convertCentimeterToFoot function
describe('convertCentimeterToFoot', () => {
  test('should convert centimeters to feet correctly', () => {
    mockCentimeterInput.value = '152.4'; // Simulate user input of 152.4 centimeters

    // Call the function to be tested
    convertCentimeterToFoot();

    // Check if the conversion was done correctly
    expect(mockFootInput.value).toBe('5.00');
  });

  // Simulates an invalid user input
  test('should clear feet input if centimeters input is invalid', () => {
    mockCentimeterInput.value = 'invalid input'; 

    convertCentimeterToFoot();

    expect(mockFootInput.value).toBe('');
  });
});
