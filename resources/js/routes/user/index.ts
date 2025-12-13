import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
export const billing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: billing.url(options),
    method: 'get',
})

billing.definition = {
    methods: ["get","head"],
    url: '/user/billing',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
billing.url = (options?: RouteQueryOptions) => {
    return billing.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
billing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: billing.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
billing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: billing.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
    const billingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: billing.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
        billingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: billing.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:13
 * @route '/user/billing'
 */
        billingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: billing.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    billing.form = billingForm
/**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
export const invoices = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})

invoices.definition = {
    methods: ["get","head"],
    url: '/user/invoices',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
invoices.url = (options?: RouteQueryOptions) => {
    return invoices.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
invoices.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invoices.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
invoices.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invoices.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
    const invoicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: invoices.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
        invoicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoices.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:14
 * @route '/user/invoices'
 */
        invoicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: invoices.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    invoices.form = invoicesForm
/**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
export const notifications = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})

notifications.definition = {
    methods: ["get","head"],
    url: '/user/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
notifications.url = (options?: RouteQueryOptions) => {
    return notifications.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
notifications.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifications.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
notifications.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifications.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
    const notificationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: notifications.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
        notificationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:15
 * @route '/user/notifications'
 */
        notificationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: notifications.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    notifications.form = notificationsForm
/**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
export const apiTokens = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiTokens.url(options),
    method: 'get',
})

apiTokens.definition = {
    methods: ["get","head"],
    url: '/user/api-tokens',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
apiTokens.url = (options?: RouteQueryOptions) => {
    return apiTokens.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
apiTokens.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiTokens.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
apiTokens.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiTokens.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
    const apiTokensForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: apiTokens.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
        apiTokensForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: apiTokens.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:16
 * @route '/user/api-tokens'
 */
        apiTokensForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: apiTokens.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    apiTokens.form = apiTokensForm
/**
 * @see routes/web.php:17
 * @route '/user/support'
 */
export const support = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: support.url(options),
    method: 'get',
})

support.definition = {
    methods: ["get","head"],
    url: '/user/support',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:17
 * @route '/user/support'
 */
support.url = (options?: RouteQueryOptions) => {
    return support.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:17
 * @route '/user/support'
 */
support.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: support.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:17
 * @route '/user/support'
 */
support.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: support.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:17
 * @route '/user/support'
 */
    const supportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: support.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:17
 * @route '/user/support'
 */
        supportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: support.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:17
 * @route '/user/support'
 */
        supportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: support.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    support.form = supportForm
const user = {
    billing: Object.assign(billing, billing),
invoices: Object.assign(invoices, invoices),
notifications: Object.assign(notifications, notifications),
apiTokens: Object.assign(apiTokens, apiTokens),
support: Object.assign(support, support),
}

export default user