import rateLimit from 'express-rate-limit';

// this limits the rate that one can use an api
// prevents the server from overloading

export const apiLimiter = ({
  max = 5,
  windowMinutes = 15,
  message = { error: "Too many requests, please try again later." },
} = {}) => {
  return rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    max,
    message,
  });
};

export default apiLimiter;
