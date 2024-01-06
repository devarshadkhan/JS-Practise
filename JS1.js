// write the programme for Pizza Delivery?

// steps for Pizza Logic....

// step1 Customer order karega
// step2 Admin Order confirm karega ya cancel
// step3 Order prepared hoga
// step4 Order delivery ke liye nikal jaiga
// step5 Order user tak successfully confirm ho jaiga

function pizzaOrder() {
  console.log("Pizza Order Placed. Waiting for confirmation...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isPizzaConfirm = Math.random() < 8.0;
      if (isPizzaConfirm) {
        resolve("Pizza Order Confirm");
      } else {
        reject("Pizza Not Order Confirm. Please try again later...");
      }
    }, 2000);
  });
}

function pizzaPrepare() {
  console.log("Pizza Ban raha hai");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza Deliver hogaya hai...");
    }, 3000);
  });
}

function pizzaDeliver() {
  console.log("Pizza out for deliver");
  return new Promise((resolve, reject) => {
    console.log("Waiting for delivery");
    setTimeout(() => {
      resolve("Pizza Delivery Successfully");
    }, 4000);
  });
}

async function pizzaProduct() {
  try {
    const pizzaOrderfromCustomer = await pizzaOrder();
    console.log(pizzaOrderfromCustomer);

    const pizzaPreparefromPizzaHub = await pizzaPrepare();
    console.log(pizzaPreparefromPizzaHub);

    const pizzaDeliveredSuccess = await pizzaDeliver();
    console.log(pizzaDeliveredSuccess);
  } catch {
    console.log("Error");
  }
}
pizzaProduct();












// function job() {
//     return new Promise(function(resolve, reject) {
//         resolve();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });












// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });









