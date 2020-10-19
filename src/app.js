import angular from 'angular';

import 'angular-sanitize';
import 'angular-ui-grid';
import 'ui-select';

import 'bootstrap/dist/css/bootstrap.css'
import 'angular-ui-grid/ui-grid.css';
import 'ui-select/dist/select.css';

import MainCtrl from './MainCtrl';
import uiSelectWrap from './uiSelectWrap';


angular.module('app', ['ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.select', 'ngSanitize'])
  .controller('MainCtrl', MainCtrl)
  .directive('uiSelectWrap', uiSelectWrap);
