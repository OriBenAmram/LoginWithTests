import { LoginPage } from "./login-page";
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

describe('LoginPage', () => { 
    test('disabled when field are empty', () => { 
        render(<LoginPage />)
        expect(screen.getByRole('button', { name: /Login/i })).toBeDisabled()
    })
    test('enabled when field are not empty', () => { 
        render(<LoginPage />)
        userEvent.type(screen.getByPlaceholderText(/Enter username/i), "Moshe")
        userEvent.type(screen.getByPlaceholderText(/Enter password/i), "123")
        expect(screen.getByRole('button', { name: /Login/i })).toBeEnabled()
    })
})