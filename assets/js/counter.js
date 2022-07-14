const initCounter = () => {
    const countUpOptions = {
        enableScrollSpy: true,
        scrollSpyDelay: 500,
        scrollSpyOnce: false,
    }
    const cu = new countUp.CountUp('counter', 200, countUpOptions);
    cu.start()
}

initCounter()

// document.addEventListener('aos:in', ({ detail }) => {
//     console.log('animated in', detail);
//     initCounter()
// });
  
// document.addEventListener('aos:out', ({ detail }) => {
//     console.log('animated out', detail);
//     initCounter()
// });

// document.addEventListener('aos:in:counter', ({ detail }) => {
//     console.log('animated in', detail);
//     initCounter()
// });
  
// document.addEventListener('aos:out:counter', ({ detail }) => {
//     console.log('animated out', detail);
//     initCounter()
// });