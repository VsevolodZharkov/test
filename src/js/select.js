const select = document.querySelectorAll("select");
const form = document.querySelector(".form-user");
// form.classList.add('is-hidden');

// select[0].classList.add('is-hidden');
// select[1].classList.add('is-hidden');
// select[2].classList.add('is-hidden');

const newSelect = `
<div class="selected">
	<svg class="selected_svg">
		<use href="./svg/symbol-defs.svg#icon-Shape"></use>
	</svg>
		<select class="" required name="option" placeholder="">
			<option class="" value="Option 1">
				Option 1
			</option>
			<option class="" value="Option 1">
				Option 2
			</option>
			<option class="" value="Option 1">
				Option 3
			</option>
			<option class="" value="Option 1">
				Option 4
			</option>
			<option class="" value="Option 1">
				Option 5
			</option>
			</select>
	</div>
`;
// form.insertAdjacentHTML("beforeend", newSelect);



