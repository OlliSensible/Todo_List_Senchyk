function changeColor(select) {
    var color = '#F0F4F8'; 

    if (select.value == 'High') {
        color = '#ff99cc';
    } else if (select.value == 'Medium') { 
        color = '#ffe099';
    } else if (select.value == 'Low') {
        color = '#4dc0ba';
    } else if (select.value == 'Defaults') {
        color = '#F0F4F8';
    }
     
    select.style.color = color;
}

window.changeColor = changeColor;

export { changeColor };