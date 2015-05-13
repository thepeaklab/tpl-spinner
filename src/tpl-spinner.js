(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name maklerportalApp.directive:spinner
   * @restricted E
   *
   * @description
   * AngularJS directive for showing a element while loading data
   *   *
   * Attributes:
   * trigger [string] trigger for showign this loading spinner
   * show-initial [boolean] flag to defien if loading spinner should be shown initially
   *
   * @example creates a spinner that is shown if any http-request is called:
   *  <spinner></spinner>
   *
   * @example creates a spinner displayed on trigger 'userdetails.show', hidden on trigger 'userdetails.hide':
   *  <spinner trigger="userdetails" show-initial="true"></spinner>
   *
   *
   *  Note:
   *  Trigger a spinner to be shown will be done by calling:
   *    $rootScope.$emit('<triggername>.show');
   *    e.g. $rootScope.$emit('userdetails.show');
   *
   *  A Spinner can be hidden by calling:
   *    $rootScope.$emit('<triggername>.hide');
   *    e.g. $rootScope.$emit('userdetails.hide');
   *
   * @author David Reiher
   * @author Thomas Cirksena
   */
  angular.module('tpl-spinner', ['tpl.scope-listener-manager'])

  .directive('tplspinner', [
    '$http',
    '$timeout',
    '$rootScope',
    'scopeListenerManager',
    function($http, $timeout, $rootScope, scopeListenerManager) {
      var pendingRequests = function() {
        return $http.pendingRequests.length > 0;
      };
      return {
        restrict: 'E',
        template: '<div class="spinner">' +
          '<div class="spinner__content">' +
          '<svg width="70" height="20">' +
          '<rect width="20" height="20" x="0" y="0" rx="3" ry="3">' +
          '<animate attributeName="width" values="0;20;20;20;0" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="height" values="0;20;20;20;0" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="x" values="10;0;0;0;10" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="y" values="10;0;0;0;10" dur="1000ms" repeatCount="indefinite"/>' +
          '</rect>' +
          '<rect width="20" height="20" x="25" y="0" rx="3" ry="3">' +
          '<animate attributeName="width" values="0;20;20;20;0" begin="200ms" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="height" values="0;20;20;20;0" begin="200ms" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="x" values="35;25;25;25;35" begin="200ms" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="y" values="10;0;0;0;10" begin="200ms" dur="1000ms" repeatCount="indefinite"/>' +
          '</rect>' +
          '<rect width="20" height="20" x="50" y="0" rx="3" ry="3">' +
          '<animate attributeName="width" values="0;20;20;20;0" begin="400ms" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="height" values="0;20;20;20;0" begin="400ms" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="x" values="60;50;50;50;60" begin="400ms" dur="1000ms" repeatCount="indefinite"/>' +
          '<animate attributeName="y" values="10;0;0;0;10" begin="400ms" dur="1000ms" repeatCount="indefinite"/>' +
          '</rect>' +
          '</svg>' +
          '</div>' +
          '</div>',
        controller: function SpinnerCtrl($scope) {

          $scope.addListeners = function addListeners(element, attrs) {
            scopeListenerManager.saveAddListener($scope, $rootScope.$on(attrs.trigger + '.show', function() {
              element.addClass('spinner--loading');
            }));
            scopeListenerManager.saveAddListener($scope, $rootScope.$on(attrs.trigger + '.hide', function() {
              element.removeClass('spinner--loading');
            }));
          };

        },
        replace: true,
        link: function($scope, element, attrs) {

          if (attrs.trigger) {
            $scope.addListeners(element, attrs);

            if (attrs.showInitial === 'true') {
              element.addClass('spinner--loading');
            }

          } else {

            if (attrs.manualtrigger === 'true') {
              element.addClass('spinner--loading');
            } else {
              $scope.$watch(pendingRequests, function(value) {
                $scope.waiting = value;

                if (value > 0) {
                  element.addClass('spinner--loading');
                } else {
                  $timeout(function() {
                    element.removeClass('spinner--loading');
                  }, 300);
                }
              });
            }
          }
        }
      };
    }
  ]);
}());
