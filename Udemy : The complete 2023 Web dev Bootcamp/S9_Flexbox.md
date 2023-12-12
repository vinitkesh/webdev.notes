# Section 9 : Flexbox
## [This website](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is amazing to understand flexbox and its nuances
## 54. Display: Flex

```
  display: flex;
```
- applied on container
- Nullifies all default display property and nullifies inline, 

---


## 55. Flex Direction (+flex basis and universal selectors)
```
flex-direction: row ;
```
- The items goes from left to right
- set by default
---
```
.container{
  flex-direction: coloumn ;
}
```
- The items goes from top to bottom
---
```
.container{
    flex-direction: coloumn ;
}
.container > * {
    flex-basis:100 px ;
}
```
![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/2f33536e-1450-40c6-85de-ad4285feed82)

- gives **height** of container as 100px (flexing along vertical axis)
---
- if direction was not changed, it would define the **width** of the element:(flexing along horizontal axis)

![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/ae9dbe85-a270-4f12-8f80-ad82c979c576)

## 56. Flex Layout
Properties applied to a flex box.

**Child properties:**

### 1. order: < int >
``` order:0; ``` (by default)

```order:num;``` - order of the elements can be predefined

- for example we want a paricular set of elements to always come last... we'll give them order 2,3 and 4 and those 3 will always come after other added elements(which have default order 0)
---
### 2. I'm not writing anyymore notes  on flexbox... just read the website thatis given at top.

## Flex Sizing

---
## [Project] Pricing table

