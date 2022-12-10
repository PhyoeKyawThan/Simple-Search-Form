function dataSearch(){
    let name = document.getElementById('name').value;
    let age  = document.getElementById('age').value;
    let birth_date = document.getElementById('birth-date').value;
    let show_data = document.getElementById('data');
    data = {
        name: name,
        age: age,
        birth_date: birth_date
    }
    show_data.innerHTML = "Name: " + data.name + "</br>" + "Age: " + data.age + "</br>" + "Birthday-Date" + data.birth_date;
}