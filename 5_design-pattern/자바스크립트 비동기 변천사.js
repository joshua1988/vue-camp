// 콜백
$.get('users/1', function(data) {
	console.log(data);
});

// 콜백
$.get('users/1', function(data) {
	if (data.id === 1) {
		$.get('products', function(data) {
			console.log(data);
			if (data.pid === 'categoryA') {
				$.get('images', function(data) {
                }
            }
        }
    }
});
// 프로미스
fetchUser()
	.then(fetchProducts)
	.then(fetchImages)
	.catch(handleError);

function fetchUser() {
	return new Promise (){ 
		$.get('users/1')
    }
}

// async await
try {
	var user = fetchUser();
    if (user.id === 1) {
        fetchProducts();
    }
} catch(error) {
	console.log(error);
}






