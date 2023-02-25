function solution(keyinput, board) {
    let [x, y] = [0, 0];
    const [xMax, yMax] = [(board[0] - 1) / 2, (board[1] - 1) / 2];

    keyinput.forEach((el) => {
        if (el === "up") y !== yMax ? y++ : null;
        else if (el === "down") y !== -yMax ? y-- : null;
        else if (el === "left") x !== -xMax ? x-- : null;
        else if (el === "right") x !== xMax ? x++ : null;
    });

    return [x, y];
}