// selectăm butonul de aplicare și adăugăm un eveniment de click
var applyBtn = document.getElementById('apply-button');
applyBtn.addEventListener('click', function() {
  // selectăm toate filtrele selectate de utilizator
  var categoryFilter = document.getElementById('category-filter').value;
  var typeFilter = document.getElementById('type-filter').value;
  var priceFilter = document.getElementById('price-filter').value;

  // selectăm toate produsele
  var products = document.getElementsByClassName('product');

  // trecem prin fiecare produs și verificăm dacă îndeplinește criteriile de filtrare
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    // verificăm filtrul de categorie
    if (categoryFilter !== 'all' && product.getAttribute('data-category') !== categoryFilter) {
      product.style.display = 'none';
      continue;
    }

    // verificăm filtrul de tip
    if (typeFilter !== 'all' && product.getAttribute('data-type') !== typeFilter) {
      product.style.display = 'none';
      continue;
    }

    // verificăm filtrul de preț
    if (priceFilter !== 'all') {
      var price = parseFloat(product.getAttribute('data-price'));
      var minPrice = parseFloat(priceFilter.split('-')[0]);
      var maxPrice = parseFloat(priceFilter.split('-')[1]);

      if (price < minPrice || price > maxPrice) {
        product.style.display = 'none';
        continue;
      }
    }

    // dacă produsul îndeplinește toate criteriile de filtrare, îl afișăm
    product.style.display = 'block';
  }
});

