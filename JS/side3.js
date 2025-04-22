
let savedPoint = parseInt( sessionStorage.getItem('currentPoint'));
savedPoint += 10; // Increment points by 10);
sessionStorage.setItem('currentPoint', savedPoint); // Save updated points
console.log("Points updated to: " + savedPoint); // Log the updated points
