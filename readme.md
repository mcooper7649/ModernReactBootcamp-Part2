# ModernReactBootcamp-Part2

- Welcome to the Continuation of the Modern React Bootcamp
- I wanted to restructure the codebase to make more repositories


## Lights Out Game
--

- using react-Lights-out-starter-code
- npm i to install dependencies


1. If you run npm start
    - we get error due to incomplete code
        - fix that (read the comments)

2. On board we need to setup our board layout
    - we need to configure the default props for nrows,ncols,chancelightStartsOn

3. Setup our initial state WITH the createBoard function
    - hasWon: false
    - board: this.createBoard()

4. Next we work on the createBoard function
    - we can use a nested loop to acheive this and create a row and fill it with boolean values
    - then we push each row on to the board
    - 