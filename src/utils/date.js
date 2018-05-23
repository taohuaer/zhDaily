export function getYesterday(currentDate) {
    const yesterday = new Date(currentDate - 1000 * 60 * 60 * 24);
    const year = yesterday.getFullYear();
    const month = yesterday.getMonth() + 1;
    const date = yesterday.getDate();

    return {
        date: `${year}${month < 10 ? '0' + month : month}${yesterday.getDate()}`,
        currentDate: yesterday
    }
}
