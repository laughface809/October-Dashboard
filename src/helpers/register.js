import http from './axios-helper'

export const handleRegister = (
    password,
    instance,
    email,
    ) => {
    http
        .post('/register', {
        email: email,
        password: password,
        tenant_name: instance
        })
        .then(function (result) {
        if (result.data.token) {
            localStorage.setItem('token', result.data.token);
        }
    })
}