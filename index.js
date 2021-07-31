function paths(n) {
	routes = 1
    for ( let i = 1; i <= n; i++) {
        routes *= i  
    }
    return routes
}

console.log(paths(1), 1)
console.log(paths(2), 2)
console.log(paths(3), 6)
console.log(paths(4), 24)
console.log(paths(5), 120)
console.log(paths(6), 720)
console.log(paths(7), 5040)
console.log(paths(8), 40320)