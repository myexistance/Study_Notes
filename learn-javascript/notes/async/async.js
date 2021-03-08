// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

//Async/Await Analogy: A mrning routine to be done  before going to work at 8am

// 1. Take a shower
// 2. Eat Breakfast
// 3. Get Dressed
// 4. Put on Make up
// 5. Check Email

// doing then in a row or no matter the order.
// you can't get dressed before completing the shower.

const morningRoutine = async (startTime) => {
  const step1FinishTime = await shower(startTime)
  const step2FinishTime = await eatbreakfast(step1FinshTime)
  const step3FinishTime = await getDressed(step2FinshTime)
  const step4FinishTime = await putOnMakeup(step3FinshTime)
  const step5FinishTime = await checkEmail(step4FinshTime)
  return step5FinshTime
}

