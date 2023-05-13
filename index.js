const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
  };
  
  const personProxy = new Proxy(person, {
    get: (obj, prop) => {
		console.log(`El valor de ${prop} es ${obj[prop]}`)
	},
	set: (obj, prop, value) => {
		console.log(`Cambió ${prop} de ${obj[prop]} a ${value}`)
		obj[prop] = value;	
	}
  });
  
  personProxy.name;
  personProxy.age = 43;