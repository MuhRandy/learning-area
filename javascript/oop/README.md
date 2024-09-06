# Single responsibility

States that a class (or object or module… you get the point) should only have one responsibility. This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.

Here’s a really common example. Most of our code has functions to update and write things to the DOM in addition to our application logic. It’s a really good idea to separate your DOM stuff from the application logic.

```javascript
function isGameOver() {
  // game over logic goes here!

  if (gameOver) {
    const gameOverDiv = document.createElement("div");
    gameOverDiv.classList.add("game-over");
    gameOverDiv.textContent = `${this.winner} won the game!`;
    document.body.appendChild(gameOverDiv);
  }
}

// to be like this

function isGameOver() {
  // game over logic goes here!

  if (gameOver) {
    DOMStuff.gameOver(this.winner);
  }
}
```

# Loosely coupled objects

Make sure that your individual objects can stand alone as much as possible. Tightly coupled objects are objects that rely so heavily on each other that removing or changing one will mean that you have to completely change another one.

As an example, if we were writing a game and wanted to completely change how the User Interface worked, we should be able to do that without completely reworking the game logic. So we should be able to start off writing our game using primarily `console.log()`s and then add in a bunch of DOM functions later without touching the game logic.
