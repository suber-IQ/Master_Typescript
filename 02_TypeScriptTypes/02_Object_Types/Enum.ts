
// 3️⃣ Enum :-In TypeScript, an enum (short for enumeration) is a way to define a set of named constants. An enum can make your code more expressive and self-documenting by providing a way to give names to groups of related values.

//↪️ Example: 1


enum Color {
    Red,
    Green,
    Blue,
  }
  
  
  let backgroundColor: Color = Color.Red;


  let textColor: Color = Color.Green;

  switch (backgroundColor) {
    case Color.Red:
      console.log('The background color is red');
      break;
    case Color.Green:
      console.log('The background color is green');
      break;
    case Color.Blue:
      console.log('The background color is blue');
      break;
    default:
      console.log('Unknown background color');
      break;
  }
  