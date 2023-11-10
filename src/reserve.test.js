import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import Reserve from './reserve';

test('form submission with valid input should call submitForm', () => {
  const mockSubmitAPI = jest.fn();

  render(<Reserve submitAPI={mockSubmitAPI} />); // Pass the mock function as a prop

  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });

  act(() => {
    fireEvent.change(dateInput, { target: { value: '2023-11-07' } });
    fireEvent.change(guestsInput, { target: { value: '5' } });
    fireEvent.click(submitButton);
  });

  expect(mockSubmitAPI).toHaveBeenCalledTimes(1);
});

test('form submission with invalid input should not call submitForm', () => {
  const mockSubmitAPI = jest.fn();

  render(<Reserve submitAPI={mockSubmitAPI} />); // Pass the mock function as a prop

  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });



  expect(mockSubmitAPI).toHaveBeenCalledTimes(0);
});
