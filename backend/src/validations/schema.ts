import Joi from 'joi';

const createShortUrlSchema = Joi.object({
  originalUrl: Joi.string().regex(/^(https?:\/\/)(([\w.-]+)\.([a-zA-Z]{2,63})(:[0-9]{1,5})?)(\/[^\s]*)?$/).required(),
  customWord: Joi.string().min(3).required()
});

export default createShortUrlSchema;