const secondHand = document.querySelector('.second-hand'); //querySelector selects the mentioned class at sets it to the variable
    const minutesHand = document.querySelector('.min-hand'); // selects mentioned class in dom and sets to variable.
    const hourHand = document.querySelector('.hour-hand');// selects mentioned class in dom and sets to variable
    //Function controls how hands on the clock move. 
    const newDate = () => {
      //sets new Date
      const now = new Date(); 


      //settings definitions for second hand
      const seconds = now.getUTCSeconds(); // gets seconds from variable now.
      const secondsToDegree = ( ( seconds / 60 ) * 360 + 90); //converts seconds to degrees adds 90 to correct offset.
       secondHand.style.transform = `rotate(${secondsToDegree}deg)`;
      

      /* setting definitions for minute hand */
      
       const minutes = now.getUTCMinutes(); // gets minutes from new date
       const minutesToDegree = ( ( minutes / 60 ) * 360 + 90); // converts minutes to degree
       minutesHand.style.transform = `rotate(${minutesToDegree}deg)`
       

       //setting definitions for hour hand.
       const hour = now.getUTCHours(); // gets hour from new date
       const hourToDegree = ( ( hour / 12 ) * 360 + 90); // converts hour to degree
       hourHand.style.transform = `rotate(${hourToDegree}deg)`;


    }

    setInterval(newDate,1000); // calls the function every 1s
