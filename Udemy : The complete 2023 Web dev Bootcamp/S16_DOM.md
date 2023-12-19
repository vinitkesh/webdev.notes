# Section 16: DOM model
## [115. Adding JS to websites]()
## [116. Intro to DOM ]()
## [117. Soln to DOM cahallege](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#117-soln-to-dom-cahallege-1)
## [118. Selecting html elements in js](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#118-selecting-html-elements-in-js-1)
## [119. Manipulating styles](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#119-manipulating-styles-1)
## [120. Structure vs style vs behaviour](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#120-structure-vs-style-vs-behaviour-1)
## [121. Text manipulation, Text content ](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#121-text-manipulation-text-content)
## [122. Manipulating attributes](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#122-manipulating-attributes-1)
## [123. tips](https://github.com/vinitkesh/webdev.notes/blob/main/Udemy%20%3A%20The%20complete%202023%20Web%20dev%20Bootcamp/S16_DOM.md#123-tips-1)

# 115. Adding JS to websites

## Type 1 : Inline JS
- Try to avoid

    ![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/b8e1137b-83a7-4097-b686-6aaa4e37d2da)
## Type 2 : Internal JS
- Try to put script element after initial html structure of the site, in the body

  
    ![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/e8adfb6a-9bdb-45c3-93f6-b7da61988776)


---
# 116. Intro to DOM 

- Browser converts html into a structure to access and manipuate an internal copy
![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/51537e20-1d80-4871-b84a-1363e522a94c)

- Example :

![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/5af80686-69cc-424a-a70d-eca437762b7a)

has dom representation of :

![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/34e81607-f316-4127-aa9e-2b36d8725c70)

- Accessing elements using document

![FirstelementChild](image-17.png)

![head](image-18.png)

### An object inside dom has 2 properties:

1. Properties: Describes smotheing about the object
2. Methods:  Describes what it can do

![Alt text](image-21.png)

### 2 actions on properties: 
- Get property eg. firstElementChild, .innerHTML , etc
- Set property :
    get property with '=' and a new value;










---
# 117. Soln to DOM cahallege

---
# 118. Selecting html elements in js
### Changing the inner HTML part of h1 in console using the document to a differernt value :
![Alt text](image-19.png)

![Alt text](image-20.png)

### 1. Tag selector
## eg:  
```
document.getElementByTagName("li") 
```
### //gives an **array** of all list elements  


![list](image-22.png)  
```
document.getElementByTagName("li")[2].style.color = "purple" ; 
```
### //changes color of 3rd list item to purple
```
document.getElementByTagName("li").length;
```
### //gives how many li elements are present in thatl location
    
## 2. Query selector method :
```
document.querySelector("h1");
```
![query selector](image-23.png)  
//gives  
![Alt text](image-24.png)  
![Alt text](image-25.png)  
![Alt text](image-26.png)


---
# 119. Manipulating styles

- Input goes as a string ie in double quotes

![image](https://github.com/vinitkesh/webdev.notes/assets/139075087/c319a9f5-186d-4398-95ed-9cd93868c774)  
![Alt text](image-27.png)  
![Alt text](image-28.png)

---
# 120. Structure vs style vs behaviour

---
# 121. Text manipulation, Text content 

---
# 122. Manipulating attributes
![Alt text](image-29.png)

---
# 123. tips

---
