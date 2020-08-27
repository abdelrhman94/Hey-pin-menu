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
    const baseScaleChange = 0.033333333;
    const baseTranslateChange = 0.7;
    let div = document.createElement('div');
    div.classList.add('single-block');
    div.innerHTML = `<div class="content">
      <img src="${heyLogoSrc}" />
      <div><h3>${listOfItems[i]}</h3><p>description</p></div>
    </div>`;
    const reverseIndex = listOfItems.length - 1 - i;
    div.style.transform = `scale(${
      1 - reverseIndex * baseScaleChange
    }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    stack.append(div);
  }

  stack.addEventListener('click', function (e) {
    const blocks = this.querySelectorAll('.single-block');
    blocks.forEach((block, i) => {
      const reverseIndex = blocks.length - 1 - i;
      block.style.transform = `rotate(${reverseIndex * 1.1}deg) translate(${
        reverseIndex * 0.4
      }rem, -${reverseIndex * 4}rem)`;
    });
  });
});
