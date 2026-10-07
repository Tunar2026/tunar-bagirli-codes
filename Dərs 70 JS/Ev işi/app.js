const categoryInput = document.getElementById('category');
const stockInput    = document.getElementById('stock');
const imageInput    = document.getElementById('image');
const preview       = document.getElementById('preview');
const addBtn        = document.getElementById('addBtn');
const tableBody     = document.getElementById('tableBody');

function generateCode() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 3; i++) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code + Math.floor(100 + Math.random() * 900);
}

imageInput.addEventListener('input', () => {
  const url = imageInput.value.trim();
  if (!url) {
    preview.hidden = true;
    preview.removeAttribute('src');
    return;
  }
  preview.src = url;
});
preview.addEventListener('load',  () => { preview.hidden = false; });
preview.addEventListener('error', () => { preview.hidden = true; });

function addProduct() {
  const category = categoryInput.value.trim();
  const stock    = stockInput.value.trim();
  const image    = imageInput.value.trim();

  if (!category || !stock) {
    alert('Zəhmət olmasa Kateqoriya və Stok Sayı sahələrini doldurun.');
    return;
  }

  const row = document.createElement('tr');

  const tdCode = document.createElement('td');
  tdCode.textContent = generateCode();

  const tdCategory = document.createElement('td');
  tdCategory.textContent = category;

  const tdStock = document.createElement('td');
  tdStock.textContent = stock + ' ədəd';

  const tdImage = document.createElement('td');
  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.alt = category;
    tdImage.appendChild(img);
  }

  row.append(tdCode, tdCategory, tdStock, tdImage);
  tableBody.appendChild(row);

  categoryInput.value = '';
  stockInput.value = '';
  imageInput.value = '';
  preview.hidden = true;
  preview.removeAttribute('src');
  categoryInput.focus();
}

addBtn.addEventListener('click', addProduct);

[categoryInput, stockInput, imageInput].forEach(el => {
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter') addProduct();
  });
});