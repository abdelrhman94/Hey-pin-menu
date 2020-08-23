const heyLogoSrc =
  'https://production.haystack-assets.com/assets/avatars/defaults/hey-84b6169bf4060a76a94a072fe96b5fef7970b02d19507e2ab3952c042c21b154.svg';
const listOfItems = [
  'hey.pin.menu',
  'hey.pin.menu',
  'hey.pin.menu',
  'hey.pin.menu',
  'hey.pin.menu',
  'hey.pin.menu',
  'hey.pin.menu',
];

document.addEventListener('DOMContentLoaded', function () {
  const stack = document.getElementById('stack');
  for (let i = 0; i < listOfItems.length; i++) {
    let div = document.createElement('div');
    div.classList.add('single-block');
    div.innerHTML = `<div class="content">
      <img src="${heyLogoSrc}" />
      <div><h3>${listOfItems[i]}</h3><p>description</p></div>
    </div>`;
    stack.append(div);
  }
});
