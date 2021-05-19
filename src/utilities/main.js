import _ from 'lodash';

export const getValue = (object, key, defaultValue) => _.get(object, key, defaultValue);

export const setValue = (object, key, defaultValue) => _.set(object, key, defaultValue);