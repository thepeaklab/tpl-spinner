# tpl-spinner

A AngularJS directive for showing a spinner-element while loading data.

#### Installation ##
```
$ bower install http://thomas@stash.thepeaklab.biz:7990/scm/open/tpl-spinner.git --save
```

#### How to use ##

##### 1. Include module
Inclucde the module 'tpl-spinner' into your app-module.

##### 2. set directive in html

```
<tplspinner></tplspinner>
or
<tplspinner trigger="userdetails" show-initial="true"></tplspinner>
```
#### Attributes ##
* __trigger__ : [string] trigger for showign this loading spinner
* __show-initial__: [boolean] flag to define if loading spinner should be shown initially
 ```

#### Note ##
   Trigger a spinner to be __shown__ will be done by calling:
```
$rootScope.$emit('<triggername>.show');

e.g. $rootScope.$emit('userdetails.show');
```
A Spinner can be __hidden__ by calling:
```
$rootScope.$emit('<triggername>.hide');

e.g. $rootScope.$emit('userdetails.hide');
```
