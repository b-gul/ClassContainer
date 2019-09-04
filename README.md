# ClassContainer

CSS class container. For instance, if you have too many classes in a div and you feel you're repeating yourself try this container to inject classes into specific div from one point.
You are feel free to edit maybe turn this cl
```
<script src="./classy.js"></script>
```

Add this into your app template file in your MVC framework
Usage:
```
var classy = new Classy({
  'example': ['test','another'],
  'another-example': ['test']
});
```
and then get rid of too many classes
```
<div class="example"></div>
<div class="another-example"></div>
```
