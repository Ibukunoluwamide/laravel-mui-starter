import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
/**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/admin.php:10
 * @route '/admin/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
export const users = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})

users.definition = {
    methods: ["get","head"],
    url: '/admin/users',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
users.url = (options?: RouteQueryOptions) => {
    return users.definition.url + queryParams(options)
}

/**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
users.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})
/**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
users.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: users.url(options),
    method: 'head',
})

    /**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
    const usersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: users.url(options),
        method: 'get',
    })

            /**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
        usersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: users.url(options),
            method: 'get',
        })
            /**
 * @see routes/admin.php:11
 * @route '/admin/users'
 */
        usersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: users.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    users.form = usersForm
/**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/admin/settings',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})
/**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

    /**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
    const settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settings.url(options),
        method: 'get',
    })

            /**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
        settingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url(options),
            method: 'get',
        })
            /**
 * @see routes/admin.php:12
 * @route '/admin/settings'
 */
        settingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settings.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    settings.form = settingsForm
/**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
 */
export const apiTokens = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiTokens.url(options),
    method: 'get',
})

apiTokens.definition = {
    methods: ["get","head"],
    url: '/admin/api-tokens',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
 */
apiTokens.url = (options?: RouteQueryOptions) => {
    return apiTokens.definition.url + queryParams(options)
}

/**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
 */
apiTokens.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiTokens.url(options),
    method: 'get',
})
/**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
 */
apiTokens.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiTokens.url(options),
    method: 'head',
})

    /**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
 */
    const apiTokensForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: apiTokens.url(options),
        method: 'get',
    })

            /**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
 */
        apiTokensForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: apiTokens.url(options),
            method: 'get',
        })
            /**
 * @see routes/admin.php:13
 * @route '/admin/api-tokens'
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
 * @see routes/admin.php:14
 * @route '/admin/billing'
 */
export const billing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: billing.url(options),
    method: 'get',
})

billing.definition = {
    methods: ["get","head"],
    url: '/admin/billing',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/admin.php:14
 * @route '/admin/billing'
 */
billing.url = (options?: RouteQueryOptions) => {
    return billing.definition.url + queryParams(options)
}

/**
 * @see routes/admin.php:14
 * @route '/admin/billing'
 */
billing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: billing.url(options),
    method: 'get',
})
/**
 * @see routes/admin.php:14
 * @route '/admin/billing'
 */
billing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: billing.url(options),
    method: 'head',
})

    /**
 * @see routes/admin.php:14
 * @route '/admin/billing'
 */
    const billingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: billing.url(options),
        method: 'get',
    })

            /**
 * @see routes/admin.php:14
 * @route '/admin/billing'
 */
        billingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: billing.url(options),
            method: 'get',
        })
            /**
 * @see routes/admin.php:14
 * @route '/admin/billing'
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
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminAuthController::login
 * @see app/Http/Controllers/Admin/AdminAuthController.php:11
 * @route '/admin/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Admin\AdminAuthController::logout
 * @see app/Http/Controllers/Admin/AdminAuthController.php:33
 * @route '/admin/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminAuthController::logout
 * @see app/Http/Controllers/Admin/AdminAuthController.php:33
 * @route '/admin/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminAuthController::logout
 * @see app/Http/Controllers/Admin/AdminAuthController.php:33
 * @route '/admin/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminAuthController::logout
 * @see app/Http/Controllers/Admin/AdminAuthController.php:33
 * @route '/admin/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminAuthController::logout
 * @see app/Http/Controllers/Admin/AdminAuthController.php:33
 * @route '/admin/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
const admin = {
    dashboard: Object.assign(dashboard, dashboard),
users: Object.assign(users, users),
settings: Object.assign(settings, settings),
apiTokens: Object.assign(apiTokens, apiTokens),
billing: Object.assign(billing, billing),
login: Object.assign(login, loginDf2c2a),
logout: Object.assign(logout, logout),
}

export default admin