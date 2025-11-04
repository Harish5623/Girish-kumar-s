// Show user info from login
const userInfoDiv = document.getElementById('userInfo');
const name = localStorage.getItem('userName');
const email = localStorage.getItem('userEmail');
const address = localStorage.getItem('userAddress');

if (name && email && address) {
  userInfoDiv.innerHTML = `<strong>Logged in as:</strong> ${name} (${email}) from ${address}`;
}

const form = document.getElementById('addProductForm');
const productList = document.getElementById('productList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const location = document.getElementById('productLocation').value;

  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <h3>${name}</h3>
    <p>Price: ₹${price}</p>
    <p>Location: ${location}</p>
    <button onclick="alert('Logistics team will contact you soon!')">Request Logistics</button>
  `;

  productList.appendChild(productCard);

  form.reset();
  
});
