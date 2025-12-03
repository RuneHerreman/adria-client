import { test, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchFromServer } from '@/assets/js/data-connector/api-communication-abstractor'

const originalFetch = globalThis.fetch;

beforeEach(()=>{
    globalThis.fetch = vi.fn();
})

afterEach(()=>{
    globalThis.fetch = originalFetch;
})



test("fetch called with correct URL and options", async () => {
    const mockJSON = vi.fn().mockResolvedValue({ok:true})

    ;(globalThis.fetch as any).mockResolvedValue({
        json: mockJSON
    })

    await fetchFromServer('/users', 'POST', { name: 'John' })

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(globalThis.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/users'),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'John' }),
        }
    )
})

test("throws when response has failure flag", async () => {
    const mockJSON = vi.fn().mockResolvedValue({failure: true});

    (globalThis.fetch as any).mockResolvedValue({json: mockJSON});

    await expect(fetchFromServer("/failure", "GET", null)).rejects.toEqual({
        failure: true
    });
})