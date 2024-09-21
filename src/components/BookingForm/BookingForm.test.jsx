/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm'; // Adjust the import path as necessary
import '@testing-library/jest-dom';
describe('BookingForm', () => {
  beforeEach(() => {
    render(<BookingForm />);
  });

  test('renders form fields', () => {
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of reservation/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Any other requests/i)).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Make reservation/i }));
    
    await waitFor(() => {
      expect(screen.getAllByText(/required/i)).toHaveLength(8); // Adjust based on your fields
    });
  });

  test('submits form with valid data', async () => {
    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Date of reservation/i), { target: { value: '2024-09-21' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText(/Any other requests/i), { target: { value: 'Window seat' } });

    window.alert = jest.fn(); // Mock alert

    fireEvent.click(screen.getByRole('button', { name: /Make reservation/i }));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('John'));
      expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Doe'));
    });
  });
});