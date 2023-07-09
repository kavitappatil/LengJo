export const createErrorMessage = (message, status) => {
    const error = new Error()
    error.message = message
    error.status = status
    return error
}