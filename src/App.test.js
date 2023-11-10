import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Reducer } from './reserve';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn((selectedDate) => {
    if (selectedDate === '2023-10-22') {
      return Promise.resolve(['18:00', '19:00', '20:00', '21:00', '22:00']);
    } else {
      return Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    }
  }),
}));

describe('Reserve Component', () => {
  // ... other tests ...

  it('should update the available times state when called with pre-selected date', async () => {
    const initialState = {
      time: '20:00',
      availableTime: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    };

    const preSelectedDate = '2023-10-22'; // Pre-selected date to be included in the dispatch

    const newState = Reducer(initialState, {
      type: 'update',
      payload: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      preSelectedDate: preSelectedDate, // Include the pre-selected date in the dispatch
    });

    expect(newState.availableTime).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});
