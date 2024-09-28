const allSeats = document.querySelectorAll('#seats-container .btn');
const selectedSeatContainer = document.getElementById('selected-seat-container');
let countSeat = Number(document.getElementById('count-seat').innerText);
let totalPrice = Number(document.getElementById('total-price').innerText);
let grandTotal = Number(document.getElementById('grand-total').innerText);
const applyBtn = document.getElementById('apply-btn');
const nextBtn = document.getElementById('next-btn');


for (seat of allSeats) {
    seat.addEventListener('click', (e) => {
        const seatName = e.target.innerText;

        const card = document.createElement("div");
        card.innerHTML = `
            <p>${seatName}</p>
            <p>Economy</p>
            <p>750</p>
        `;
        card.className = 'flex justify-between px-8 list';

        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
            countSeat -= 1;

            const items = selectedSeatContainer.children;

            for (const item of items) {
                if (item.children[0].innerText === seatName) {
                    selectedSeatContainer.removeChild(item);
                }
            }
        }
        else {
            countSeat += 1;
            if (countSeat > 4) {
                return alert('you cannot book more than 4 seats!')
            }
            e.target.className = 'selected';
            selectedSeatContainer.appendChild(card);
        }


        totalPrice = countSeat * 750;
        grandTotal = totalPrice;
        document.getElementById('count-seat').innerText = countSeat;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerText = totalPrice;

        if (countSeat > 0) {
            applyBtn.removeAttribute('disabled', true);
            nextBtn.removeAttribute('disabled', true);
        }
    })
}

applyBtn.addEventListener('click', () => {
    const gTotal = validateCoupon(totalPrice, grandTotal);
    if (!gTotal) {
        return;
    }
    else {
        document.getElementById('grand-total').innerText = gTotal;
        applyBtn.setAttribute('disabled', true);
    }
})


// passenger info
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const pName = document.getElementById('pName');
    const pNumber = document.getElementById('pNumber');
    const pEmail = document.getElementById('pEmail');

    if (pName.value.length < 1 || pNumber.value.length < 11 || pEmail.value.length < 1) {
        return alert('invalid info');
    }
    else {
        const myModal = document.getElementById('my-modal');
        const closeModal = document.getElementById('closeModal');
        myModal.classList.remove('hidden');
        closeModal.addEventListener('click', () => {
            myModal.classList.add('hidden');
            location.reload();
        })
    }
})