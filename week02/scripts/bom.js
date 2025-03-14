const input = document.querySelector ('#favchap');
const button = document. querySelector ('.button');
const list = document. querySelector ('Alma 3', 'Alma 32', 'Helaman 12', 'Moroni 7', '1 Nephi 8');
const li = document. createElement ('li');
const deleteButton = document. createElement ('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function() {button.classList.toggle('open');
	#favchap.classList.toggle('open');
});  // Code to execute when the button is clicked
  if (input.value.trim() !== '') {  }; // this space must be filled with statement of if functions//
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });
  input.value = ''; // empty filed//
  input.focus();

	