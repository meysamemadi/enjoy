"use client"

import { PassportInfo, PersonalInfo } from "@/schema/user"
import { useState } from "react"
import { PersonalInfoForm } from "./personal-info-form"
import { PassportInfoForm } from "./passport-info-form"


export const VisaForm = () => {
    const [step, setStep] = useState(1)
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null)
  
    const handlePersonalInfoSubmit = (data: PersonalInfo) => {
      setPersonalInfo(data)
      setStep(2)
    }
  
    const handleBack = () => {
      setStep(1)
    }
  
    const handleSubmit = async (data: PassportInfo) => {
      // Here you would typically:
      // 1. Combine personalInfo and passportInfo
      // 2. Submit to your API
      // 3. Handle success/error
      console.log('Form submitted:', { personalInfo, passportInfo: data })
    }
  
    return (
      <div>
        {step === 1 ? (
          <PersonalInfoForm onNext={handlePersonalInfoSubmit} />
        ) : (
          <PassportInfoForm onBack={handleBack} onSubmit={handleSubmit} />
        )}
      </div>
    )
}
