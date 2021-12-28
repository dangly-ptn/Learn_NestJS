import { resolve } from 'path';

export default {
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
};
