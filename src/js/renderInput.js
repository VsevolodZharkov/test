const formSelected = (name) => {
	console.log(name === 'Type of Inquiry*');
	return `
	<div class=${(name === 'Type of Inquiry*') ? 'form-group' : 'form-group' + ' ' + 'form-group__last-drid'}>
	<div class="drop-down">
	<button class="drop-down__button">
		${name}
		<svg class="drop-down__svg">
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


const selects = document.querySelectorAll("select");
const form = document.querySelector(".form-user");
const divSelected = document.querySelector(".selected");
const optionList = document.querySelector(".selected_option");

selects.forEach(function(select){
	select.classList.add("is-hidden");
	select.insertAdjacentHTML("afterend", formSelected(select.name));
});

