
// create custom error
export const customError = (statusCode, message) => {
 const error = new Error
 error.statusCode = statusCode
 error.message = message
};