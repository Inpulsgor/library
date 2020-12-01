## array
```js
        <ul>
            <li v-for="(employee, index) of employees">{{ employee.name }}, {{ employee.age }}</li>
        </ul>
```
## num
```js
        <ol>
            <li v-for="number of 100">{{ number }}</li>
        </ol>
```
## object
```js
        <ul>
            <li v-for="(value, key, index) in person">{{ index + 1 }} {{ key }} {{ value }}</li>
        </ul>
```
