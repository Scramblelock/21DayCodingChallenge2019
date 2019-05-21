let navigation = {
  x: -2,
  y: 4,
  z: 7,
  speed: "raaaaid"
};

let ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

let radio = {
  range: {
    low: 88,
    high: 108
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

//Day 1
//Write a function called powerOn() which will change the 'powerOn' property of the 'ship' object. 
const powerOn = () => ship.powerOn = true;

//Day 2
//Make a function called countModules to reveal how many modules there are to choose from.
const countModules = () => availableModules.length;

//Day 3
//Write a function called countEssential() which will count how many modules from the availableModules array have the essential flag set to true.

//for loop (slower)
// const countEssential = () => {
//   let count = 0;
//   for (let i=0; i < availableModules.length; i++) {
//     if (availableModules[i].essential) {
//       count++;
//     }
//   }
//   return count;
// }

//forEach (faster)
const countEssential = () => {
  let count = 0;
  availableModules.forEach( module => {
    if (module.essential) {
      count++;
    }
  });
  return count;
}

//Day 4
const loadModule = (index) => {
  availableModules[index].enabled = 'true';
  ship.modules.push(availableModules[index]);
}

//Day 5
//Rename your loopModule() function to findModuleIndex(). Update your function to take in a name that you’re looking for, and return the index of that module in the availableModules array, before loading it into the ship. 
const findModuleIndex= (name) => {
  for (i = 0; i < countModules(); i++) {
    if ((availableModules[i].name === name) && availableModules[i].essential) {
      return i;
    } else {
      availableModules[i].essential = true;
      return i;
    }
  }
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));

// //Day 6
//Use your already-defined methods and load in the "navigation" module.
loadModule(findModuleIndex("navigation"));

//Day 7
//Write and call a function called resetLARRY() which will prompt LARRY to quack ten times so he breaks out of his loop.
const LARRY = {
  quack() {"quack"}
}

const resetLARRY = () => {
  for (i = 0; i < 10; i++) {
    LARRY.quack();
  } 
}

//Day 8
//Update your loadModule() function so if any of the modules that LARRY requires you to load are not essential, you override the system and set the essential property to true before loading the module.
loadModule(findModuleIndex("communication"));

//Day 9
//Write a function called setMessage(). This function should set the message property on the radio object to be the JSON version of the navigation object.
const setMessage = () => radio.message = JSON.stringify(navigation);

//Day 10
//Write a function called activateBeacon() which will set the beacon property to true.
const activateBeacon = () => radio.beacon = true; 

//Day 11
//Write a function called setFrequency() that will set the frequency property on the radio object 
const setFrequency = () => {
  const x = radio.range.high;
  const y = radio.range.low;
  radio.frequency = (x + y) / 2;
}

//Day 12
//Write a function called initialize() which will set the x, y, and z values correctly to start off at 0 in the navigation system.
const initialize = () => {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

//Day 13
//Write a function called calibrateX(). There are a lot of steps involved in this one, luckily your manual has great documentation instructing that your function needs to:
// Loop from 1 - 12
// Call the built-in checkSignal() function each time, and assign the result to a variable called signal
// Make sure your signal variable is not undefined
// If the value is defined, set the navigation object's x property to that value
// Break out of the loop!

const calibrateX = () => {
  for (i = 0; i < 12; i++) {
    let signal = checkSignal();
    if (signal !== undefined) {
      return navigation.x = signal;
    }
}

//Day 14
//Write calibrateY() and calibrateZ(). The manual says you'll need to loop from 1 to 60
const calibrateY = () => {
  for (i = 0; i < 60; i++) {
    let signal = checkSignal();
    if (signal !== undefined) {
      navigation.y = signal;
      break;
    }
  }
}

const calibrateZ = () => {
  for (i = 0; i < 60; i++) {
    let signal = checkSignal();
    if (signal !== undefined) {
      navigation.z = signal;
      break;
    }
  }
}

//Day 15
//Write a function called calibrate() which the nav system can call anytime it wants, which will calibrate your X, Y, and Z axes. 
const calibrate = () => {
  calibrateX();
  calibrateY();
  calibrateZ();
}

//Day 16
//Write a function called setSpeed(speed) which will take in a string as a parameter, and set the speed in the navigation object to an integer.
const setSpeed = (string) => {
  let integer = parseInt(string);
  if (Math.sign(integer) >= 0) {
    navigation.speed = integer;
  }
}

//Day 17
//Write a function called activateAntenna() which will set the active property on the antenna to true.
const activateAntenna = () => ship.antenna.active = true;

//Day 18
//Create a new function called sendBroadcast(). In this function you'll need to write a loop to call the newly-enabled broadcast() function 100 times
const sendBroadcast = () => {
  for (i = 0; i < 100; i++) {
    broadcast();
  }
}

//Day 19
//Write and call a function called configureBroadcast() which will get the broadcast to Earth.
// Your function will need to follow a precise order:
// set the frequency on the radio
// set the antenna to active
// send your announcement
const configureBroadcast = () => {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}

//Day 20
//Write a function called decodeMessage(message). This function takes in a coded message and changes all the numbers back to their respective vowels before returning the newly decoded message.
//Message: "th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."
const decodeMessage = (message) => {
  let myStr = message;
  myStr = message
    .replace(/1d/g, 'ld')
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/2/g, 'u')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 'y')
  return myStr;
}

//Day 21
//Write a function called returnToEarth(). Your function should:

// Call the built-in broadcast() function three times. Each of these calls should pass either "x", "y" or "z" as a parameter.
// Store the response from each broadcast() call in it's own variable (The broadcast() function returns a coded-message from Earth with the correct coordinate to return home in HEX! Check out the hints for more on this)
// Decode the returned message using the decodeMessage() function you wrote earlier
// Change the decoded hex-coordinate to an integer using parseInt()
// Set each of the navigation object's x, y and z parameters to the integer coordinates
const returnToEarth = () => {
  let responseX = broadcast("x");
  let responseY = broadcast("y");
  let responseZ = broadcast("z");
  navigation.x = parseInt(decodeMessage(responseX), 16);
  navigation.y = parseInt(decodeMessage(responseY), 16);
  navigation.z = parseInt(decodeMessage(responseZ), 16);
 }