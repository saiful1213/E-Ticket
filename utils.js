
const couponFeild = document.getElementById('coupon-field');

function validateCoupon(totalPrice, grandTotal) {
    if (couponFeild.value === 'NEW15') {
        const netPrice = totalPrice * 0.15;
        grandTotal = totalPrice - netPrice;
        couponFeild.value = '';
        alert('conratulations! you get 15% discount');
        return grandTotal
    }
    else if (couponFeild.value === 'COUP20') {
        const netPrice = totalPrice * 0.2;
        grandTotal = totalPrice - netPrice;
        couponFeild.value = '';
        alert('conratulations! you get 20% discount');
        return grandTotal;
    }
    else {
        alert('invalid coupon');
        return false;
    }
}
