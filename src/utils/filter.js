export function childrenCat(id) {
    id = Number(id)
    if (id === 1) return '亲生男'
    if (id === 2) return '亲生女'
    if (id === 3) return '过继男'
    if (id === 4) return '过继女'
    if (id === 5) return '认养儿'
    if (id === 6) return '认养女'
    if (id === 7) return '出承男'
    if (id === 8) return '出承女'
    if (id === 9) return '入承男'
    if (id === 10) return '入承女'
    if (id === 11) return '上门女婿'
    if (id === 12) return '无子嗣'
}

export function kind(id) {
    id = Number(id)
    if (id === 1) return '亲生父母'
    if (id === 2) return '领养父母'
    if (id === 3) return '过继父母'
    if (id === 4) return '双承出承父母'
    if (id === 5) return '双承入承父母'
}

export function inheritName(id) {
    id = Number(id)
    if (id === 1) return '父亲'
    if (id === 2) return '母亲'
}

export function degreeName(id) {
    id = Number(id)
    if (id === 1) return '小学'
    if (id === 2) return '初中'
    if (id === 3) return '中专'
    if (id === 4) return '高中'
    if (id === 5) return '大专'
    if (id === 6) return '本科'
    if (id === 7) return '硕士研究生'
    if (id === 8) return '博士研究生'
}
