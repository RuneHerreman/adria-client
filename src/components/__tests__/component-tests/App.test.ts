// src/components/__tests__/component-tests/App.test.ts
import { test, expect, describe, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from '@/App.vue'

describe('App.vue', () => {
    let router
    let pinia

    beforeEach(async () => {
        pinia = createPinia()

        router = createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
                { path: '/subscription/checkout', name: 'checkout', component: { template: '<div>Checkout</div>' } },
                { path: '/onboarding/occupation', name: 'occupation', component: { template: '<div>Occupation</div>' } },
                { path: '/onboarding/interests', name: 'interests', component: { template: '<div>Interests</div>' } },
                { path: '/contact', name: 'contact', component: { template: '<div>Contact</div>' } }
            ]
        })

        await router.push('/')
        await router.isReady()
    })

    test('adds landing-page-body class so background can be rendered on root path', async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [router, pinia],
                stubs: {
                    HeaderComponent: true,
                    FooterComponent: true
                }
            }
        })

        expect(document.body.classList.contains('landing-page-body')).toBe(true)
    })
    test('adds gradient-background-body class on subscription checkout page', async () => {
        await router.push('/subscription/checkout')

        const wrapper = mount(App, {
            global: {
                plugins: [router, pinia],
                stubs: {
                    HeaderComponent: true,
                    FooterComponent: true
                }
            }
        })

        expect(document.body.classList.contains('gradient-background-body')).toBe(true)
    })
    test('adds gradient-background-body class on onboarding pages', async () => {
        await router.push('/onboarding/occupation')

        const wrapper = mount(App, {
            global: {
                plugins: [router, pinia],
                stubs: {
                    HeaderComponent: true,
                    FooterComponent: true
                }
            }
        })


        expect(document.body.classList.contains('gradient-background-body')).toBe(true)
    })
    test('removes all classes when navigating away', async () => {
        await router.push('/')
        const wrapper = mount(App, {
            global: {
                plugins: [router, pinia],
                stubs: {
                    HeaderComponent: true,
                    FooterComponent: true
                }
            }
        })


        expect(document.body.classList.contains('landing-page-body')).toBe(true)

        await router.push('/subscription/checkout')
        await wrapper.vm.$nextTick()

        expect(document.body.classList.contains('landing-page-body')).toBe(false)
        expect(document.body.classList.contains('gradient-background-body')).toBe(true)
    })
})
