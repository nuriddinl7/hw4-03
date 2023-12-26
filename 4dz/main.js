const container = document.getElementById('result'); 
let url = 'https://63d304794abff88834170d21.mockapi.io/ss'; 
 
const postButton = document.getElementById('post'); 
const putButton = document.getElementById('put'); 
 
function clearInputs() { 
    document.getElementById('name').value = ''; 
    document.getElementById('age').value = ''; 
    document.getElementById('address').value = ''; 
    document.getElementById('avatar').value = ''; 
} 
 
function postData() { 
    const data = { 
        name: document.getElementById('name').value, 
        address: document.getElementById('address').value, 
        age: document.getElementById('age').value, 
        avatar: document.getElementById('avatar').value, 
        description: "Johnny Sins, Jonny Sins, Damian.", 
    }; 
 
    const requestOptions = { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
    }; 
 
    fetch(url, requestOptions) 
        .then(response => response.json()) 
        .then(data => { 
            console.log(data); 
            clearInputs(); 
            fetchData(); 
        }) 
        .catch(error => console.log(error)); 
} 
 
function putData(id) { 
    const data = { 
        name: document.getElementById('name').value, 
        address: document.getElementById('address').value, 
        age: document.getElementById('age').value, 
        avatar: document.getElementById('avatar').value, 
        description: "Johnny Sins, Jonny Sins, Damian.", 
    }; 
 
    const requestOptions = { 
        method: 'PUT', 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
    }; 
 
    fetch(`${url}/${id}`, requestOptions) 
        .then(response => response.json()) 
        .then(data => { 
            console.log(data); 
            clearInputs(); 
            fetchData(); 
        }) 
        .catch(error => console.log(error)); 
} 
 
 
postButton.addEventListener('click', postData); 
putButton.addEventListener('click', () => { 
    const id = prompt('Enter ID to update:'); 
    if (id) { 
        putData(id); 
    } 
}); 
 
 
function fetchData() { 
    fetch(url) 
        .then(response => { 
            if (!response.ok) { 
                console.log('Error fetching data'); 
            } 
            return response.json(); 
        }) 
        .then(data => { 
            container.innerHTML = ''; 
            data.forEach(item => { 
                container.innerHTML += `<div class="block"> 
                    <p>ID:${item.id}</p> 
                    <p>${item.name}</p> 
                    <p>${item.age}</p> 
                    <img width="100px" src="${item.avatar}" /> 
                    <p>${item.description}</p> 
                    <p>${item.address}</p> 
                </div>`; 
            }); 
        }) 
        .catch(err => { 
            console.log(err); 
        }); 
} 
 
fetchData();