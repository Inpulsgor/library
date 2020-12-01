```js
    <!-- array -->
        <ul>
            <li v-for="(employee, index) of employees">{{ employee.name }}, {{ employee.age }}</li>
        </ul>
```
```js
     <!-- num -->
        <ol>
            <li v-for="number of 100">{{ number }}</li>
        </ol>
```
```js
     <!-- object -->
        <ul>
            <li v-for="(value, key, index) in person">{{ index + 1 }} {{ key }} {{ value }}</li>
        </ul>
```
