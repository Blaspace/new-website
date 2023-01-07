'use strict'

const nav =document.querySelector('.nav-2');
const btn = document.querySelector('.nav-icon');
const nav2 = document.querySelectorAll('.nav2');

nav2.forEach((value, index, array)=>{
    value.addEventListener('click', (e)=>{
        e.target.parentElement.parentElement.style.display = 'none'
        btn.innerHTML = '&#x2630;'
    })
})

btn.addEventListener('click', ()=>{
    if(nav.style.display === 'inline-block'){
    nav.style.display= 'none';
    btn.innerHTML = '&#x2630;';
    }else{
        nav.style.display= 'inline-block';
    btn.innerHTML = '&#x2613;';
    }
})

const img = document.querySelector('.feed-img');
const nam = document.querySelector('.fb-name');
const comm = document.querySelector('.fb-comment');

const comment = [
    {img: 'image/prof.jpg', nme: 'James Samuel', com: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit incidunt voluptatem eum at veritatis sit voluptate doloremque nemo neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, minima! Exercitationem cumque atque tempora! Maiores inventore corrupti dolores. Nesciunt dolore excepturi error, nobis fugit officiis itaque asperi'},
    {img: 'image/prof2.jpg', nme: 'John Joseph', com: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quo assumenda harum voluptatem culpa dolore soluta molestias aliquam fugiat voluptates laborum voluptatibus atque quos quod aperiam aut natus facere est consequuntur dicta necessitatibus odit nam! Porro ducimus incidunt accusantium voluptates corrupti corporis maxime dignissimos culpa iusto! Harum iste sit nemo.'},
    {img: 'image/prof3.png', nme: 'Ngbede Samson', com: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, quam! Fugiat libero tempora accusantium obcaecati doloribus cum neque voluptate in dignissimos adipisci architecto iure dicta, sint ipsam aliquid. Ipsum, nulla?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolores sint voluptatum eligendi eveniet quia similique laborum, a porro ad quos at sit, amet veniam voluptate architecto omnis quas sapiente.'},
    {img: 'image/prof4.jpg', nme: 'Favour Zakka', com: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quo assumenda harum voluptatem culpa dolore soluta molestias aliquam fugiat voluptates laborum voluptatibus atque quos quod aperiam aut natus facere est consequuntur dicta necessitatibus odit nam! Porro ducimus incidunt accusantium voluptates corrupti corporis maxime dignissimos culpa iusto! Harum iste sit nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure hic quas? Unde laboriosam facilis esse fugit, reprehenderit tenetur ut eius ullam possimus dolor facere accusantium autem tempore reiciendis dolores!'},
    {img: 'image/prof5.jpg', nme: 'Favour James', com: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas incidunt expedita, impedit nisi sapiente veritatis rerum illo tempore delectus hic? Doloremque consequuntur dolor quia hic ullam quisquam, praesentium placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum, quos numquam illum explicabo in eum maiores tempore illo, nobis laboriosam! Tempore modi aspernatur voluptatibus, explicabo architecto iste molestias possimus.'}
];



window.setInterval(()=>{
    let i = Math.floor(Math.random()* comment.length);

    img.src = comment[i].img;
    nam.innerHTML = comment[i].nme;
    comm.innerHTML = comment[i].com;
}, 3000);


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ngbedejames145@gmail.com",
        Password : "blaspace",
        To : 'ngbedejames145@gmail.com',
        From : document.querySelector('.email').value,
        Subject : "new message from your web",
        Body : 'first name:' + document.querySelector('.form-fn').value +'<br>' 
        + 'last name:' + document.querySelector('.form-ln')
        + 'Phone no:' + document.querySelector('.form-phone').value +'<br>' 
        + 'message:' + document.querySelector('.form-text').value +'<br>' 
    }).then(message => alert('mesage sent succesfully'));
}