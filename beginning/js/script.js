window.addEventListener('load', () => {

    let form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let empId = document.getElementById("empId").value
        console.log(`Employee ID: ` + empId)

        let name = document.getElementById("name").value
        console.log(`Name: ` + name)

        let ext = document.getElementById("ext").value
        console.log(`Extension: ` + ext)

        let email = document.getElementById("email").value
        console.log(`Email: ` + email)

        let department = document.getElementById("department").value
        console.log(department);

    });
});




