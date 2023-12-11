import request from './request';

export function getDatasetList(params: any) {
  return request.get('/dataset', params);
}
