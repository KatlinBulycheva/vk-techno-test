const KEY_FOR_LS = 'VK-TECHNO-TEST';

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

const dataFromLS = localStorage.getItem(KEY_FOR_LS);
const preparedDataFromLS = dataFromLS && JSON.parse(dataFromLS);

if (preparedDataFromLS) {
  Object.keys(preparedDataFromLS).forEach((key) => {
    $applicantForm[key].value = preparedDataFromLS[key];
  });
}

$durationValue.textContent = `${$rangeInput.value} ч`;
$rangeInput.addEventListener('input', (event) => {
  $durationValue.textContent = `${event.target.value} ч`;
});

$applicantForm.addEventListener('reset', (event) => {
  $durationValue.textContent = `${event.target[4].defaultValue} ч`;

  localStorage.removeItem(KEY_FOR_LS);
});

function getFormData(formNode) {
  const dataOfForm = Object.fromEntries(new FormData(formNode).entries());
  return dataOfForm;
}

function setLsKey() {
  const data = getFormData($applicantForm);
  localStorage.setItem(KEY_FOR_LS, JSON.stringify(data));
}

$applicantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = getFormData($applicantForm);
  console.log(JSON.stringify(data));

  event.target.reset();
  setLsKey();
});

$applicantForm.addEventListener('change', () => {
  setLsKey();
});