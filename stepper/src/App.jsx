import { useState } from "react"
import "./App.css"

function App() {
  const STEPPER_DATA = [
    {
      name: "Contact Details",
      Component: () => (
        <div>Add contact details for further communications.</div>
      ),
    },
    {
      name: "Shipping Address",
      Component: () => <div>Add shipping address for successful delivery.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete Payment to complete the order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div>Ready to get delivered!</div>,
    },
  ]
  const [currentStep, setCurrentStep] = useState(1)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleNext = () => {
    console.log(currentStep)
    if (currentStep >= STEPPER_DATA.length + 1) return
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep <= 1) return
    setCurrentStep((prev) => prev - 1)
  }

  return (
    <div className="main">
      <div className="stepper-container">
        {STEPPER_DATA.map((item, idx) => (
          <div key={idx} className="items">
            <div
              className={`num ${
                currentStep > idx + 1 || isCompleted ? "completed" : ""
              } ${currentStep === idx + 1 ? "active" : ""}`}
            >
              {idx + 1}
            </div>
            <div className="title">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="btns">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
