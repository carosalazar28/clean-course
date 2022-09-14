(() => {


  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit( fruit: string ): boolean {
    const validFruits = ['manzana', 'cereza', 'ciruela'];
    return validFruits.includes(fruit)
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColor = 'red'|'yellow'|'purple'
  function getFruitsByColor( color: FruitColor ): string[] {
    interface Fruits {
      red: string[]
      purple: string[]
      yellow: string[]
    }
    const fruitsByColor: Fruits = {
      red: ['manzana', 'fresa'],
      purple: ['moras', 'uvas'],
      yellow: ['piña', 'banana'],
    }
    const fruitsToReturn: string[] = fruitsByColor[color]
    if (!fruitsToReturn) throw Error('the color must be: red, yellow, purple')
    return fruitsToReturn
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    let message = 'Working properly!'
    if (!isFourthStepWorking) message = 'Fourth step broken.'
    if (!isThirdStepWorking) message = 'Third step broken.'
    if (!isFirstStepWorking) message = 'First step broken.'
    if (!isSecondStepWorking) message = 'Second step broken.'
    return message
  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();