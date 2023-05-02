import {TypoGraphy}  from "../../atoms/Typography/typography"
import { render, screen } from '@testing-library/react'

test('Trying to test first atom', () => {
    render(<TypoGraphy/>)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument();
})