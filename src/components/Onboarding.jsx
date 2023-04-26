import React,{useState} from 'react';

function Onboarding() {
 const [step, setStep] = useState(1)
 const totalPages = 3;
 const progress = (step / totalPages) * 100;

 const onNext = () => {
   if (step < totalPages) {
    setStep(step + 1);
   }
 }

 const onPrev = () => {
   if (step > 1) {
    setStep(step -1)
   }
 }
   return (
    <div>
<h1>Onboardin Step {step}</h1>
<button disabled={step === 1} onClick={onPrev}>Preview</button>

<button disabled={step === totalPages} onClick={onNext}>Next</button>

    </div>
  )
}

export default Onboarding