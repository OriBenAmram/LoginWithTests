import { LoginPage } from './login-page'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';


describe('login - submit btn', () => {
    test('disabled when fields are empty', () => {
        render(<LoginPage />);
        expect(screen.getByRole('button', { name: /Login/i })).toBeDisabled()
    })

    test('ebabled when fields are not empty', () => {
        render(<LoginPage />);
        userEvent.type(screen.getByPlaceholderText(/Enter username/i), "ori")
        userEvent.type(screen.getByPlaceholderText(/Enter password/i), "123")

        expect(screen.getByRole('button', { name: /Login/i })).toBeEnabled()


    })
})