export interface APIError {
  name: string;
  message: string;
}

/**
 * Convert error messages into error format.
 * Handles axios errors.
 *
 * @param err errorMessage APIError
 */
const handleError = (err: any): APIError => {
  if (instanceofAPIError(err)) {
    return err.response.data as APIError;
  }
  return {
    message: err.toString(),
    name: "UnexpectedError",
  };
};

const instanceofAPIError = (err: any) => {
  if (!err?.response?.data) {
    return false;
  }
  const error = err.response.data;
  const keys = ["name", "message"];
  if (!error) {
    return false;
  }
  for (const key of keys) {
    if (Object.keys(error).indexOf(key) < 0) {
      return false;
    }
  }
  return true;
};

export { handleError };
