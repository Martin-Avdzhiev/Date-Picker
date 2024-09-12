export async function fetchData() {
    try {
        const response = await fetch('db.json');
        if (!response.ok) {
            throw new Error('Response error');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export function limitRange(min, max, picker) {
    const date = new Date();
    const maxDate = new Date(date);
    if (max) {
        maxDate.setDate(maxDate.getDate() + max);
    }
    const minDate = new Date(maxDate);
    minDate.setDate(minDate.getDate() - min);
    const formatedMinString = `${minDate.getFullYear()}-${minDate.getMonth() + 1 < 10 ? "0" + (minDate.getMonth() + 1) : minDate.getMonth() + 1}-${minDate.getDate() < 10 ? "0" + minDate.getDate() : minDate.getDate()}`;
    const formatedMaxString = `${maxDate.getFullYear()}-${maxDate.getMonth() + 1 < 10 ? "0" + (maxDate.getMonth() + 1) : maxDate.getMonth() + 1}-${maxDate.getDate() < 10 ? "0" + maxDate.getDate() : maxDate.getDate()}`;
    picker.min = formatedMinString;
    picker.max = formatedMaxString;
}

export function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6
}
export function isWorkDay(date) {
    return date.getDay() !== 0 && date.getDay() !== 6
}
