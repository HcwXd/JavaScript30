const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const inputText = this.querySelector('[name=item]').value;
    const item = {
        inputText,
        done: false,
    };
    items.push(item);

    renderItems(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function renderItems(plates = [], plateList) {
    plateList.innerHTML = plates
        .map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                    <label for="item${i}">${plate.inputText}</label>
                </li>
                `;
        })
        .join('');
}

function toggleDone(e) {
    console.log('aa');

    if (!e.target.matches('input')) return;

    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    renderItems(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
renderItems(items, itemsList);
