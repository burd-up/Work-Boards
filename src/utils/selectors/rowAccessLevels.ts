// функция преобразует массив уровней доступа(чисел) в массив строк описывающих их
export const rowAccessLevels = (accesses: Array<number>) => {
    let accessesString: Array<object> | any[] = [];
    accesses.forEach(el => {
        if (el === 1) {
            accessesString.push({row: 'development', num: 1})
        } else if(el === 2) {
            accessesString.push({row: 'testing', num: 2})
        } else if(el === 3) {
            accessesString.push({row: 'adding tasks', num: 3})
        } else if(el === 4) {
            accessesString.push({row: 'adding projects', num: 4})
        } else if(el === 5) {
            accessesString.push({row: 'adding users', num: 5})
        }
    })
    return accessesString
}