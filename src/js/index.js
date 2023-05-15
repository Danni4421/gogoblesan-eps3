/*? no js js needed from me */

const inputValue = document.getElementById("hobbyInput");
const itemList = document.getElementById("item-list");
const nodeList = document.getElementsByClassName("item");
const from = document.getElementById("from");
const to = document.getElementById("to");
const hobbies = [];

const saveHobbyInput = () => {
  if (inputValue.value !== "") {
    hobbies.push(inputValue.value);
    print();
  } else {
    errorFire("Harap isi prompt terlebih dahulu");
  }

  inputValue.value = "";
};

const switcher = () => {
  if (from.value >= hobbies.length && to.value >= hobbies.length) {
    errorFire("Posisi Element tidak sesuai atau tidak ditemukan");
  } else if (
    hobbies[from.value - 1] !== undefined &&
    hobbies[to.value - 1] !== undefined
  ) {
    const temp = hobbies[from.value - 1];
    hobbies[from.value - 1] = hobbies[to.value - 1];
    hobbies[to.value - 1] = temp;
  } else {
    errorFire("Terdapat indeks yang tidak sesuai");
  }
  from.value = to.value = "";
  print();
};

const print = () => {
  itemList.innerHTML = "";
  hobbies.map((e) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.innerText = e;
    itemList.appendChild(item);
  });
};

const errorFire = (value) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "error",
    title: `${value}`,
  });
};
