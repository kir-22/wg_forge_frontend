import users from '../data/users.json';

function getUserInfo(id){
  let str;
  users.forEach( elem => {
    if(id === elem.id){
      if(elem.gender.toLowerCase() === 'male'){
        str = `<a href='#'>Mr. ${elem.first_name} ${elem.last_name}</a>`;
      }
      else{
        str = `<a href='#'>Ms. ${elem.first_name} ${elem.last_name}</a>`
      }
    }
  });
  return str;
}

export default getUserInfo;