## :nth-child(2n)
```css
/* 
2 * 0 = 0;
2 * 1 = 2;
2 * 2 = 4;

буде вибрано 2-й і 4-й елементи 
 */

.list-item:nth-child(2n) {
  color: white;
}

/* аналог */
.list-item:nth-child(even) {
  color: white;
}
```

## :nth-child(2n + 1)
```css
/* 
2 * 0 + 1 = 1;
2 * 1 + 1 = 3;
2 * 2 + 1 = 5;

буде вибрано усі не парні елементи 
 */

.list-item:nth-child(2n + 1) {
  color: white;
}

/* аналог */
.list-item:nth-child(odd) {
  color: white;
}
```

##:nth-child(-n + 2)
```css
/* 
-0 + 2 = 2;
-1 + 2 = 1;
-2 + 2 = 0;

буде вибрано перший і другий елемент
 */

.list-item:nth-child(-n + 2) {
  color: white;
}
```
