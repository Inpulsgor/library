<body>
    <div id="app">
    
     <!-- array -->
        <ul>
            <li v-for="(employee, index) of employees">{{ employee.name }}, {{ employee.age }}</li>
        </ul>
        
     <!-- num -->
        <ol>
            <li v-for="number of 100">{{ number }}</li>
        </ol>
     
     <!-- object -->
        <ul>
            <li v-for="(value, key, index) in person">{{ index + 1 }} {{ key }} {{ value }}</li>
        </ul>
        
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {
                employees: [
                    { id: 1, name: 'Max', age: 20 },
                    { id: 2, name: 'Sam', age: 23 },
                    { id: 3, name: 'Tom', age: 16 },
                ],
                person: {
                  name: 'Will',
                  age: 25,
                  job: 'Developer'
                }
            },
        })
    </script>
</body>
