document.addEventListener('DOMContentLoaded', () => {
  const myText = document.getElementById('myText');
  const changeBtn = document.getElementById('changeBtn');
  const container = document.getElementById('container');
  let currentState = 0;

  // The states array now includes a buttonText for each theme.
  const states = [
    {
      text: "Hello, World!",
      buttonText: "Click Me!",
      textClasses: ['text-gray-600', 'text-lg', 'font-normal', 'italic'],
      containerClasses: ['bg-white', 'shadow-lg'],
      buttonClasses: ['bg-blue-500'],
      headerClasses: ['text-gray-800'],
    },
    {
      text: "Hello, JavaScript DOM!",
      buttonText: "Next Theme",
      textClasses: ['text-purple-600', 'text-xl', 'font-bold'],
      containerClasses: ['bg-gradient-to-r', 'from-purple-200', 'to-indigo-200', 'shadow-xl'],
      buttonClasses: ['bg-purple-600'],
      headerClasses: ['text-indigo-800'],
    },
    {
      text: "Creative Coding Fun!",
      buttonText: "Keep Going!",
      textClasses: ['text-green-600', 'text-2xl', 'font-extrabold'],
      containerClasses: ['bg-white', 'shadow-2xl', 'border-4', 'border-green-400'],
      buttonClasses: ['bg-green-500'],
      headerClasses: ['text-green-800'],
    },
    {
      text: "Style & Substance!",
      buttonText: "Let's Restart!",
      textClasses: ['text-yellow-500', 'text-3xl', 'font-bold', 'uppercase', 'tracking-widest'],
      containerClasses: ['bg-yellow-100', 'shadow-2xl', 'ring-4', 'ring-yellow-400'],
      buttonClasses: ['bg-yellow-500'],
      headerClasses: ['text-yellow-600'],
    },
  ];

  changeBtn.addEventListener('click', () => {
    // Clear previous classes
    myText.classList.remove(...states[currentState].textClasses);
    container.classList.remove(...states[currentState].containerClasses);
    changeBtn.classList.remove(...states[currentState].buttonClasses);
    container.querySelector('h2').classList.remove(...states[currentState].headerClasses);

    // Advance to the next state, or loop back to the first
    currentState = (currentState + 1) % states.length;
    const newState = states[currentState];

    // Apply new text and classes
    myText.textContent = newState.text;
    changeBtn.textContent = newState.buttonText; // Update the button's text
    myText.classList.add(...newState.textClasses);
    container.classList.add(...newState.containerClasses);
    changeBtn.classList.add(...newState.buttonClasses);
    container.querySelector('h2').classList.add(...newState.headerClasses);
  });
});
