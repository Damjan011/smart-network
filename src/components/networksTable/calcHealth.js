import React from 'react';

const HealthBar = (primiHealth, primiStatus) => {
  const health = Math.round(primiHealth.primiHealth / 20);
  console.log(health);

  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const ShowRed = () => {
    return (
      <div className="ui-bar-red"></div>
    )
  };
  const ShowOrange = () => {
    return (
      <div className="ui-bar-orange"></div>
    )
  };
  const ShowYellow = () => {
    return (
      <div className="ui-bar-yellow"></div>
    )
  };
  const ShowGreen = () => {
    return (
      <div className="ui-bar-green"></div>
    )
  };
  if (health === 0) {
    return (
      <div className='ui-smiley-bar'>
        <div>
          <p>😰</p>
        </div>
        {a.map(e => (<ShowRed />))}
      </div>
    )
  } else if (health === 1) {
    return (
      <div className='ui-smiley-bar'>
        <div>
          <p>🙁</p>
        </div>
        {a.map(e => (<ShowOrange />))}
      </div>
    )
  } else if (health === 2 || health === 3) {
    return (
      <div className='ui-smiley-bar'>
        <div>
          <p>😐</p>
        </div>
        {a.map(e => (<ShowYellow />))}
      </div>
    )
  } else if (health === 4 || health === 5) {
    return (
      <div className='ui-smiley-bar'>
        <div>
          <p>🙂</p>
        </div>
        {a.map(e => (<ShowGreen />))}
      </div>
    )
  }
}

export default HealthBar;







































































// function HealthFunction(){

//   let damjan = [];

//   let boban = data.map(el => el);

//   boban.forEach( e => damjan.push(e.health));
//   console.log(damjan);

//   let calcHealth = [];
//   damjan.forEach(e => calcHealth.push(e/20));
//   console.log(calcHealth)

//   boban.forEach(e => {
//     if (e.status === 'ack') {
//       console.log('jeste ack');
//     } else {
//       console.log('nije ack');
//     }
//   })
//   console.log('-------------------------');
// }