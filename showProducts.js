var paginationText = function(pageNumber, pageSize, totalProducts){
	return `Showing ${(pageNumber - 1) * pageSize + 1} to ${Math.min(pageSize * pageNumber, totalProducts)} of ${totalProducts} Products.`;
};

console.log(paginationText(1, 10, 30));		// 'Showing 1 to 10 of 30 Products.'
console.log(paginationText(3, 10, 26));		// 'Showing 21 to 26 of 26 Products.'
console.log(paginationText(1, 10, 8));		// Showing 1 to 8 of 8 Products.'



