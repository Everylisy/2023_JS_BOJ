function getSalePrice(percent, price) {
    return parseInt(price - (price * (percent / 100)));
}

function solution(price) {
    if(500000 <= price) return getSalePrice(20, price);
    else if (300000 <= price) return getSalePrice(10, price);
    else if (100000 <= price) return getSalePrice(5, price);
    else return price;
}