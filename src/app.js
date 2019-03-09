import orders from '../data/orders.json';
import getUserInfo from './getUsers';


export default (function () {
    let table = `<table>
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>User Info</th>
        <th>Order Date</th>
        <th>Order Amount</th>
        <th>Card Number</th>
        <th>Card Type</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>`;
document.getElementById("app").innerHTML += table;

let tbody = document.querySelector('tbody');
orders.forEach(tr => {
 tr = `<tr id = order_${tr.id}>
 <td>${tr.transaction_id}</td>
 <td class= 'user_data'>${getUserInfo(tr.user_id)}</td>
 <td>${formatDate(tr.created_at)}</td>
 <td>$${tr.total}</td>
 <td>${tr.card_number.substring(0,2)}********${tr.card_number.substr(tr.card_number.length - 4)}</td>
 <td>${tr.card_type}</td>
 <td>${tr.order_country} (${tr.order_ip})</td>
 </tr>`
 tbody.innerHTML += tr;
});
  
}());
function formatDate(date){
    let date_1 =new Date(+date); 
    let dd = date_1.getDate();
    let mm = date_1.getMonth() + 1;
    let yy = date_1.getFullYear() % 100;
    let hh = date_1.getHours();
    let min = date_1.getMinutes();
    let ss = date_1.getSeconds();
    if(dd < 10){
        dd = '0' + dd;
    }
    if(mm <  10){
        mm = '0' + dd;
    }
    if(yy < 10){
        yy = '0' + yy;
    }

    return `${dd}/${mm}/${yy} ${hh}:${min}:${ss}`;
}
console.log(formatDate("1543325996"));