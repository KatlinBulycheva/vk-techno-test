const $applicantForm = document.querySelector('[data-form]');
// console.dir($applicantForm);
const $selectFloor = document.querySelector('#floor');
const $selectRoom = document.querySelector('#room');
const $durationValue = document.querySelector('[data-duration]');
const $rangeInput = document['booking-room'].duration;

const bottomFloor = 3;
const upperFloor = 27;

const minRoomNumb = 1;
const maxRoomNumb = 10;

for (let floor = bottomFloor; floor <= upperFloor; floor++) {
  const newOption = new Option(`${floor}`, `${floor}`);
  $selectFloor.appendChild(newOption);
}

for (let room = minRoomNumb; room <= maxRoomNumb; room++) {
  const newOption = new Option(`${room}`, `${room}`);
  $selectRoom.appendChild(newOption);
}

$durationValue.textContent = `${$rangeInput.value} ч`;
$rangeInput.addEventListener('input', (event) => {
  $durationValue.textContent = `${event.target.value} ч`;
});
$applicantForm.addEventListener('reset', (event) => {
  $durationValue.textContent = `${event.target[4].defaultValue} ч`;
});

function formData(formNode) {
  const dataOfForm = Object.fromEntries(new FormData(formNode).entries());

  //   const resultData = {
  //     ...dataOfForm,
  //     id: +dataOfForm.id,
  //     rate: +dataOfForm.rate,
  //     age: +dataOfForm.age,
  //     favorite: !!dataOfForm.favorite,
  //   };
  return dataOfForm;
}

$applicantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = formData($applicantForm);

  console.log(data);
  console.log(JSON.stringify(data));
});