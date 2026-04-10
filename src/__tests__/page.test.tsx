import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page'

describe('Home page', () => {
  it('renders the primary download button', () => {
    render(<Home />)
    const buttons = screen.getAllByText(/Download for macOS/i)
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('shows the beta badge', () => {
    render(<Home />)
    const matches = screen.getAllByText(/beta/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the main headline', () => {
    render(<Home />)
    expect(screen.getByText(/Know before/i)).toBeInTheDocument()
    expect(screen.getByText(/you hit zero/i, { exact: false })).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Home />)
    expect(screen.getByText('Live Usage Rings')).toBeInTheDocument()
    expect(screen.getByText('Reset Countdowns')).toBeInTheDocument()
    expect(screen.getByText('Claude & Codex')).toBeInTheDocument()
    expect(screen.getByText('Model Breakdown')).toBeInTheDocument()
  })

  it('download button links to the releases URL', () => {
    render(<Home />)
    const links = screen.getAllByRole('link', { name: /download for macos/i })
    links.forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('github.com'))
    })
  })

  it('renders GitHub link', () => {
    render(<Home />)
    const ghLinks = screen.getAllByRole('link', { name: /github/i })
    expect(ghLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('shows macOS platform note', () => {
    render(<Home />)
    const matches = screen.getAllByText(/macOS/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
