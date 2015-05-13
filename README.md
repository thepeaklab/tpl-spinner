# tpl-spinner

A AngularJS directive for showing a spinner-element while loading data.

#### Installation ##
```
$ bower install http://thomas@stash.thepeaklab.biz:7990/scm/open/tpl-spinner.git --save
```

#### How to use ##
```
<spinner></spinner>
or
<spinner trigger="userdetails" show-initial="true"></spinner>
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
