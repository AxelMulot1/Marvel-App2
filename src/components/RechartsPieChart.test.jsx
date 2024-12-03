import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RechartsPieChart from './RechartsPieChart';
import { prepareData } from './chart-utils';

// Mock the prepareData function
jest.mock('./chart-utils', () => ({
    prepareData: jest.fn(),
}));

describe('RechartsPieChart', () => {
    const data = [
        { name: 'Force', value: 8 },
        { name: 'Intelligence', value: 5 },
    ];

    beforeEach(() => {
        prepareData.mockReturnValue(data);
    });

    test('renders RechartsPieChart', () => {
        render(<RechartsPieChart data={data} />);

        // expect to have a div with the class "recharts-wrapper"
        expect(document.querySelector('.recharts-wrapper')).toBeInTheDocument();
    });
});