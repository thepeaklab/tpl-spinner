# angular-custom-select

Thie is just another kind of customizable select directive but unlike other there's no need to create a predefined template.

Just add some attributes to your select-field and it's done.

#### Installation ##
```
$ bower install https://github.com/grumpyshoe/angular-custom-select.git --save
```

#### How to use ##
There are two directives you could use __tpl-select__ and __tpl-select-static__.

#### tpl-select ##
This directive should be used by setting the options dynamically via $scope parameter.

Syntax:
```
<div tpl-select tpl-options="myOptions" tpl-label="myLabelKey" ng-model="myModel"></div>
```
The property ___tpl-label___ shouldn't be set if only a String-Array is used as source.

Attributes:
* __ng-model__: the model where the data should be saved
* __tpl-select__: defines that this get option via $scope parameter
* __tpl-options__: array of options shown on select
* __tpl-label__: the object key that represents the label that data (optional)
* __tpl-prefix__: prefix to be set before label (optional)
* __tpl-identifier__: unique identifier used for cache selected data (optional)
* __tpl-setfirstvaluemanually__: defines if selected value should automatically be first of _tpl-options_

#### tpl-select-static ##
This directive should be used by setting the options static in _option_-tags.

Syntax:
```
<div tpl-select-static ng-model="myModel">
  <option value="key1">label1</option>
  <option value="key2">label2</option>
</div>
```

Attributes:
 * __tpl-select-static__: defines that this should use defined option tags
 * __ng-model__: the model where the data should be saved
* __tpl-prefix__: prefix to be set before label (optional)
* __tpl-identifier__: unique identifier used for cache selected data (optional)

### Result (the same as in _tpl-select_):
 ```
<div class="tpl-select">
  <div class="tpl-select__trigger">{{ngModel[tplLabel] | translate}}</div>
  <ul class="tpl-select__list">
    <li  class="tpl-select__list-item" ng-repeat="option in tplOptions" ng-Click="select(option)">
    {{option[tplLabel] | translate}}
    </li>
  </ul>
</div>
```
