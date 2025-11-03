import api from './api';

export const register = (payload) => api.post('/auth/register', payload);
export const login = (payload) => api.post('/auth/login', payload);
export const getMe = () => api.get('/auth/me');
export const updateMe = (payload) => api.put('/auth/me', payload);
export const listUsers = () => api.get('/auth/admin/users');
export const updateUser = (id, payload) => api.put(`/auth/admin/users/${id}`, payload);
export const deleteUser = (id) => api.delete(`/auth/admin/users/${id}`);