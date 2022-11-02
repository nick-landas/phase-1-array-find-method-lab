// code your solution here
const superbowlWin = recordsArray => {
    const r = recordsArray.find(recordObj => recordObj.result === 'W');
    if (r) {
        return r.year
    } else {
        return undefined;
    }
}