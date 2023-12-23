# webdev.notes
A repo to contain notes and codes for all things webdev.

1. ### 1. What are pseudo elements in CSS❓
      <details>
      <summary><h2>Answer:</h2></summary>
      Pseudo-elements are CSS selectors that target a specific part of an element. They allow you to style certain parts of an element without the need for additional HTML markup. Pseudo-elements are denoted by a double colon (`::`) notation.
      
      Common pseudo-elements include:
      
      1. `::before`: Inserts content before the content of the selected element.
         
         ```css
         p::before {
           content: "Before text: ";
         }
         ```
      
      2. `::after`: Inserts content after the content of the selected element.
         
         ```css
         p::after {
           content: " After text.";
         }
         ```
      
      3. `::first-line`: Selects the first line of the content within an element.
         
         ```css
         p::first-line {
           font-weight: bold;
         }
         ```
      
      4. `::first-letter`: Selects the first letter of the content within an element.
         
         ```css
         p::first-letter {
           font-size: 150%;
         }
         ```
      
      5. `::selection`: Selects the portion of an element that is selected by a user.
      
         ```css
         ::selection {
           background-color: yellow;
           color: black;
         }
         ```
      
      6. `::placeholder`: Selects the placeholder text in an input or textarea element.
      
         ```css
         input::placeholder {
           color: gray;
         }
         ```
      
      7. `::nth-child`: Selects the nth child element of its parent.
      
         ```css
         li:nth-child(odd) {
           background-color: #f0f0f0;
         }
         ```
      
      These are just a few examples, and there are more pseudo-elements available. Pseudo-elements provide a way to style specific parts of elements without modifying the HTML structure directly, which can be useful for creating decorative effects or fine-tuning the appearance of your web pages.
      
      </details>
      
