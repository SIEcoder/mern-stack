let seconds = 0  

  setInterval(() => {
    console.log(`Printing after ${seconds += 2} seconds from first execution`)
  }, 2000)

  console.log('This will run first')