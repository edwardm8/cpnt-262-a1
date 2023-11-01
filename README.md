# CPNT-262-A1 Web Page to Life

## Edward Mah
## Code
script.js

9 card gallery
- lines 8-47

toggles
- mobile nav toggle
  - Lines 51-58
- hide and show
  - Lines 61-69

JS css maniplulation
- Lines 64 and 67
## Code Journal
Tried to figure out how to do button hover effects using js for all buttons. Will retry later date.

```
const buttons = document.querySelectAll('button')

buttons.forEach(q => q.addEventListner('mousein',changeIn(q)))

buttons.forEach(q => q.addEventListner('mouseout',changeout(q)))

function changeIn(q){
  q.style.backgroundColor = "red"
}

function changeout(q){
  q.style.backgroundColor = "blue"
}
```
## Attributions
- [Nav bar](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci)
- [Hamburger animation](https://www.w3schools.com/howto/howto_css_menu_icon.asp)
- [Prepend](https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child)
- [form refresh](https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript)