# meteor-spiderable-test

work in progress: just a test to see if spiderable is working 

start with
`````bash
meteor --settings settings.json
`````

then
`````bash
curl "http://localhost:3000/?_escaped_fragment_="
`````
should contain __testdata-n__
`````bash
...
<h1>testdata-0</h1> 
<ul> 
<li>testdata-0</li> 
<li>testdata-1</li> 
<li>testdata-2</li> 
<li>testdata-3</li> 
<li>testdata-4</li> 
...
`````
