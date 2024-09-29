import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SideBar from '../SideBar';

//describe Block: Groups all the tests related to the SideBar component for better organization.
describe('SideBar Component', () => {

    //mock data and functions
    const mockOnSelectUser = jest.fn();
    const mockData = [
        { name: 'Alice', chat: { messages: [] } },
        { name: 'Bob', chat: { messages: [{ sender: 'You' }] } },
    ];

    //Tests that the SideBar component renders without errors when provided with empty data arrays.
    test('renders without crashing', () => {
        render(<SideBar data={[]} groupdata={[]} onSelectUser={mockOnSelectUser} />);
    });
    
    //Checks if user cards are rendered correctly when mockData is provided. It specifically asserts that "Alice" is present in the document.
    test('renders user cards when data is provided', () => {
        render(<SideBar data={mockData} groupdata={[]} onSelectUser={mockOnSelectUser} />);
        expect(screen.getByText('Alice')).toBeInTheDocument();
    });
    
    //Tests the search input functionality. It simulates typing "Alice" into the search bar and checks that only "Alice" is visible, while "Bob" is not.
    test('filters users based on search input', async () => {
        render(<SideBar data={mockData} groupdata={[]} onSelectUser={mockOnSelectUser} />);
        
        fireEvent.change(screen.getByPlaceholderText('Search or start new chat'), { target: { value: 'Alice' } });
        
        await waitFor(() => {
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.queryByText('Bob')).not.toBeInTheDocument();
        });
    });
});