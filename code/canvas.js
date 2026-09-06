const rows = 5;
const cols = 5;
const initialValue = 0;

// Creates a 5x5 grid filled with 0s
const plane = Array.from({ length: rows }, () => Array(cols).fill(initialValue));

console.log(plane);
// Access a specific coordinate: plane[y][x]
plane[2][3] = 1; 
