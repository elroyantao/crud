import angular from 'angular';

export default function($resource) {
  "ngInject";

  return $resource('http://localhost:3000/api/accounts/:id', null, {
    update: {
      method: 'PUT'
    }
  })
}
