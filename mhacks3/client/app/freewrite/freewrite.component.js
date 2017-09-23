'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './freewrite.routes';

export class FreewriteComponent {
  /*@ngInject*/
  constructor($http) {
    this.message = 'Hello';
    this.$http = $http;
    this.editorText;
  }

  test() { 
    const { editorText } = this;
    if (editorText.substring(editorText.length-1) === " ") {      
      this.$http.post('/api/things/test/check', {text: editorText})
        .then(response => {
          this.result = response.data[response.data.length - 1];
        })
        .catch(console.log);
    }


  }
}

export default angular.module('mhacks3App.freewrite', [uiRouter])
  .config(routes)
  .component('freewrite', {
    template: require('./freewrite.html'),
    controller: FreewriteComponent,
    controllerAs: 'freewriteCtrl'
  })
  .name;
