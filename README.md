Here's the **HTML** code explained in bullet points:

**HTML Structure:**

* **DOCTYPE declaration:** Defines the document type as HTML
* **`<html>` tag:** Root element of the HTML document
  * `lang` attribute: Specifies the document language (English in this case)
* **`<head>` tag:** Contains meta information about the document
  * **`<meta>` tags:
    * `charset` attribute: Defines the character encoding (UTF-8 for most modern websites)
    * `viewport` attribute: Controls how the document is displayed on different devices
  * **`<title>` tag:** Sets the title of the webpage ("Tic-Tac-Toe Game" here)
  * **`<link>` tag: Links an external stylesheet file (`style.css`) for styling the webpage
* **`<body>` tag:** Contains the visible content of the webpage
  * **`<main>` tag:** Defines the main content area
    * **`.winInfo` class:** A hidden container for winner information
      * `<strong>--winner--</strong>`: Text displayed when there's a winner (hidden initially)
      * Button with ID `newGame`: Likely used to start a new game after a win
    * **`<h1>` tag:** Displays the game title ("Tic ~ Tac ~ Toe") with italic and bold styling
    * **`.container` class:** Likely used for layout purposes
      * **`.gameBox` class:** Likely styles the tic-tac-toe grid
        * Nine buttons with class `box`: Represent the individual squares on the game board
    * **`.draw` class:** A hidden container with text displayed in case of a draw 
    * Button with ID `resetGame`: Likely used to reset the game board
* **`<script>` tag:** Links an external JavaScript file (`script.js`) containing the game logic

**Key Points:**

* The HTML code defines the basic structure of the webpage, including the title, layout, and initial content.
* It doesn't contain the game logic itself, the game logic is handled by the JavaScript file (`script.js`).
* CSS file (`style.js`) is responsible for styling the visual elements.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Here's the **CSS** code explained in bullet points:

**General Styling:**

* `* { margin: 0; padding: 0; }`: Removes default margins and padding from all elements.
* `body { background-color: #dedbd2; text-align: center; }`: Sets the background color of the page (#dedbd2 is a light gray) and centers all text content.

**Headings (h1):**

* `h1 { color: #344e41; text-decoration: dotted underline; }`: Sets the color of the heading (h1) to a dark green (#344e41) and adds a dotted underline.

**Container (.container):**

* `margin-top: 5vmin`: Adds a margin of 5% viewport height from the top.
* `height: 70vm`: Sets the height of the container to 70% viewport height.
* `display: flex; justify-content: center; align-items: center; flex-wrap: wrap;`: Uses flexbox layout to center the content horizontally and vertically within the container, allowing elements to wrap on smaller screens.

**Game Board (.gameBox):**

* Similar to `.container` but uses flexbox to arrange the buttons (`.box`) within the grid.
* `gap: 1.5vmin`: Adds a gap of 1.5% viewport height between the buttons.
* `height: 60vmin; width: 60vmin;`: Sets the height and width of the game board to 60% viewport dimensions. 

**Individual Game Squares (.box):**

* `height: 18vmin; width: 18vmin;`: Sets the height and width of each button (representing a square) to 18% viewport dimensions.
* `border-radius: 1rem; border: none;`: Creates rounded corners (1rem) and removes the default border.
* `box-shadow: 0 0 1rem rgba(68, 55, 66, 0.3);`: Adds a subtle shadow effect.
* `font-size: 8vmin;`: Sets the font size of the text displayed within the squares to 8% viewport height.
* `background-color: #a3b18a; color: #344e41;`: Sets the background color to a light green (#a3b18a) and the text color to the same dark green used in headings.

**Reset Game Button (#resetGame):**

* Similar styling to individual squares but with a larger size (height: 5vmin; width: 25vmin).
* `margin-top: 3vmin;`: Adds a margin of 3% viewport height from the top.
* `font-weight: bold;`: Makes the text bold.

**Win Info (.winInfo):**

* `display: flex; justify-content: center; align-items: center; flex-direction: column;`: Uses flexbox to center the content vertically within the container and arranges elements in a column.
* `height: 130vmin;`: Sets the height of the win info container to 130% viewport height (likely to cover the entire screen).
* `gap: 8vmin;`: Adds a gap of 8% viewport height between elements within the container.

**New Game Button (#newGame):**

* Similar styling to the reset game button but with potentially different text content.

**Winner Message (.winnerMsg):**

* `font-size: 5vmin;`: Sets the font size of the winner message to 5% viewport height.

**Draw Text (.draw):**

* `margin-top: 5vmin; margin-bottom: 2vmin;`: Adds margins around the draw text.
* `font-size: larger;`: Increases the font size of the draw text compared to regular text.

**Hidden Class (.hide):**

* `display: none;`: Hides any element with the class `.hide`. This is likely used to initially hide the win info and draw text until triggered by the game logic in JavaScript.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Here's the explanation of the **JavaScript** code in bullet points:

**Variable Initialization:**

* `boxes`: Selects all elements with the class `.box` (representing the game squares) and stores them in an array.
* Similar selections are done for buttons (`resetGame`, `newGame`), text elements (`winnerMsg`, `draw`), and the container  (`winInfo`).

**Game State Variables:**

* `turn`: Boolean variable to track whose turn it is (true for X, false for O).
* `movesPlayed`: Keeps track of the total number of moves played in the game.

**Winning Conditions:**

* `wins`: Constant array containing lists of indexes representing winning combinations (e.g., [0, 1, 2] for top row).

**Game Reset Function (`gameReset`):**

* Sets `turn` back to true (X starts).
* Calls `enableGame` function to reset the board.

**Disable and Enable Game Functions (`disableGame`, `enableGame`):**

* `disableGame`: Loops through all squares (`boxes`) and disables them (prevents further clicks).
* `enableGame`: Loops through all squares, enables them, clears their text content, hides win/draw messages, and enables clicks again.

**Show Draw Function (`showDraw`):**

* Removes the hidden class from the draw text element, making it visible.
* Calls `disableGame` to prevent further clicks.

**Show Winner Message Function (`showWinnerMsg`):**

* Sets the winner message content dynamically using the provided winner ("X" or "O").
* Removes the hidden class from the win info container, making it visible.
* Calls `disableGame` to prevent further clicks.

**Check Win Function (`checkWin`):**

* Loops through each winning combination (`pattern`) in the `wins` array.
* For each combination, it checks if all three squares have the same non-empty value (X or O).
* If a match is found, calls `showWinnerMsg` with the winning character.
* If the loop finishes without a win and all squares are filled (`movesPlayed === boxes.length`), it calls `showDraw` to indicate a draw.

**Event Listeners:**

* Each square (`box`) has a click event listener.
    * When clicked, it checks the current turn (`turn`).
    * If it's X's turn, it places an X and changes the color.
    * If it's O's turn, it places an O and changes the color.
    * Disables the clicked square to prevent further clicks.
    * Increments `movesPlayed`.
    * Calls `checkWin` to see if there's a winner or a draw after the move.
* Both `newGame` and `resetGame` buttons have click event listeners that call `enableGame` to reset the board.
