import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminAuthController::attempt
 * @see app/Http/Controllers/Admin/AdminAuthController.php:16
 * @route '/admin/login'
 */
export const attempt = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: attempt.url(options),
    method: 'post',
})

attempt.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminAuthController::attempt
 * @see app/Http/Controllers/Admin/AdminAuthController.php:16
 * @route '/admin/login'
 */
attempt.url = (options?: RouteQueryOptions) => {
    return attempt.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminAuthController::attempt
 * @see app/Http/Controllers/Admin/AdminAuthController.php:16
 * @route '/admin/login'
 */
attempt.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: attempt.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminAuthController::attempt
 * @see app/Http/Controllers/Admin/AdminAuthController.php:16
 * @route '/admin/login'
 */
    const attemptForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: attempt.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminAuthController::attempt
 * @see app/Http/Controllers/Admin/AdminAuthController.php:16
 * @route '/admin/login'
 */
        attemptForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: attempt.url(options),
            method: 'post',
        })
    
    attempt.form = attemptForm
const login = {
    attempt: Object.assign(attempt, attempt),
}

export default login