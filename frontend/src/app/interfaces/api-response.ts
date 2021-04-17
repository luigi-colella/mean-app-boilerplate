type ApiResponse<T> =  { status: 'success' | 'error' } & T

export default ApiResponse
