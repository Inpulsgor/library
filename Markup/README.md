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

```css
/* 
2 * 0 + 1 = 1;
2 * 1 + 1 = 3;
2 * 2 + 1 = 5;

буде вибрано усі не парні елементи 
 */

.list-item:nth-child(2n) {
  color: white;
}

/* аналог */
.list-item:nth-child(odd) {
  color: white;
}
```
