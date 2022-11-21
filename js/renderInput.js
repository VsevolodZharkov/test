const formSelected = (name) => {
	const res = name === 'Type of Inquiry*';
	return `
	<div class=${res ? 'form-group__last-grid' : 'form-group' }>
		<div class="drop-down">
			<button class="drop-down__button">
				${name}
				<svg class=${ res ? 'drop-down__svg-last' : 'drop-down__svg' }>
					<use href="./svg/symbol-defs.svg#icon-Shape"></use>
				</svg>
			</button>
			<ul class="drop-down__list">
					<li class="drop-down__list-item" data-value="Option 1">Option 1</li>
					<li class="drop-down__list-item" data-value="Option 2">Option 2</li>
					<li class="drop-down__list-item" data-value="Option 3">Option 3</li>
					<li class="drop-down__list-item" data-value="Option 4">Option 4</li>
					<li class="drop-down__list-item" data-value="Option 5">Option 5</li>
			</ul>
			<input class="drop-down__input-hidden" type="text" name="options" value="">
		</div>
	</div>
	`;
};

const button = document.querySelector(".form-user__submit");
const selects = document.querySelectorAll("select");
const form = document.querySelector(".form-user");
const divSelected = document.querySelector(".selected");
const optionList = document.querySelector(".selected__option");

selects.forEach(function(select){
	select.classList.add("is-hidden");
	select.insertAdjacentHTML("afterend", formSelected(select.name));
});

form.addEventListener("submit", function(e) {
	e.preventDefault();
	// console.dir(e.target);
	// console.log(e.target.children)
	const a = e.target.children;
	const b = [...a];
	b.forEach((item) => {
		console.log(item.children[0].children[2]);
		console.dir(item.children[0].children[2]);

		// if(item.children[0].value !== ' ') {
		// 	console.log(item.children[0].value); 
		// }
		// console.dir(item.children[0].type);
		// console.dir(item.children[0].value !== ' ');

	});

});










