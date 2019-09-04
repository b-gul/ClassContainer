# ClassContainer

CSS class container. For instance, if you have too many classes in a div and you feel you're repeating yourself try this container to inject classes into specific div from one point.
You are feel free to edit maybe turn this cl
```
<script src="./classy.js"></script>
```

Add this into your app template file in your MVC framework
Just create an alias and use it anywhere.
Usage:
```
var classy = new Classy({
  'example': ['col-md-4','px-4','too many classes goes like this'],
  'another-example': ['col-md-5', 'too many classes goes like this]
});
```
and then get rid of too many classes
```
<div class="example"></div>
<div class="another-example"></div>
```
