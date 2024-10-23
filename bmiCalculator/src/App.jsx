import { useState } from "react";

function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState({status:"",colorClass:""})


  const submitHandler = (e) => {
    e.preventDefault();

    if(height< 1 || weight<1) return alert("Data is missing either in Height or Weight box")
    if(height>3 || weight>150) return alert("Please enter a realistic values")

    let bmi = calc(height, weight);
    let {status, colorClass} = stating(bmi)
    setBmi(bmi.toFixed(2));  // Formatting BMI to 2 decimal places
    setStatus({status, colorClass})

    setHeight("")
    setWeight("")
  }

  function calc(h, w) {
    return w / (h * h);
  }

  function stating(bmi) {
    if (bmi < 18.5) {
      return {status:"Underweight. Consider increasing calorie intake.", colorClass:"text-yellow-500"}
    } 
    else if(bmi > 18.5 && bmi < 25) {
      return {status:"Normal weight. Keep up the good work!", colorClass:"text-green-500"}
    }
    else if(bmi>24.9 && bmi<30) {
      return {status:"Overweight. Consider regular exercise and a balanced diet.", colorClass:"text-orange-500"}
    }
    else {
      return {status:"Obese. Consult with a healthcare provider for guidance.", colorClass:"text-red-500"}
    }
  }

  function reset() {
    setHeight(null)
    setWeight(null)
    setBmi(null)
    setStatus({status:"", colorClass:"" })
  }

  return (
    <>
      <div className="w-full h-screen bg-neutral-800 flex flex-col items-center justify-center">
        
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md relative">
        
        <h1 className="text-3xl text-center  text-white mb-8 font-semibold">BMI Calculator</h1>
        
        <i 
            className="ri-restart-line text-3xl text-white font-semibold absolute top-2 right-2 cursor-pointer hover:text-gray-400 transition duration-300"
            onClick={reset}
          ></i>
          
          <form className="space-y-4 flex flex-col items-center  py-4" onSubmit={submitHandler}>        

            
            <div className="w-full flex flex-col gap-3 justify-center items-center">
              <input 
                type="number" 
                id="heighing"
                placeholder="Height (meters)" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                className="w-3/4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />              
              
                
                <input 
                  type="number" 
                  placeholder="Weight (kg)" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  className="w-3/4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="weighing"
                />
              </div>

            <button 
              type="submit" 
              className="w-[40%]  bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Calculate BMI
            </button>

          </form>

          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-xl text-white">Your BMI: <span className="font-bold">{bmi}</span></p>
              <p className={`text-xl ${status.colorClass} font-extralight`}>Your are <span className="font-extralight">{status.status}</span> </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;

