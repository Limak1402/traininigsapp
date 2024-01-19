// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import AdminButton from './components/AdminButton';
// import Input from './components/Input';

// describe('AdminButton', () => {
//     it('calls onUpdate function when the update button is clicked', () => {
//       const onUpdateMock = jest.fn(); // Create a mock function
//       const { getByText } = render(<AdminButton onUpdate={onUpdateMock} />);
//       const updateButton = screen.getByText('Update');
  
//       fireEvent.click(updateButton);
  
//       expect(onUpdateMock).toHaveBeenCalled();
//     });
  
//     it('calls onDelete function when the delete button is clicked', () => {
//       const onDeleteMock = jest.fn(); // Create a mock function
//       const { getByText } = render(<AdminButton onDelete={onDeleteMock} />);
//       const deleteButton = screen.getByText('Delete');
  
//       fireEvent.click(deleteButton);
  
//       expect(onDeleteMock).toHaveBeenCalled();
//     });
//   });

//   describe('Input', () => {
//     it('calls onChange function when the input value changes', () => {
//       const onChangeMock = jest.fn(); // Create a mock function
//       const { getByRole } = render(
//         <Input value="" onChange={onChangeMock} />
//       );
//       const inputElement = screen.getByRole('textbox');
  
//       fireEvent.change(inputElement, { target: { value: 'New value' } });
  
//       expect(onChangeMock).toHaveBeenCalled();
//     });
//   });

describe('future test',()=>{
  it('first future test', async ()=>{
    if (false) 
    {
      console.error("Hi i'm first test");
    }
  });
});