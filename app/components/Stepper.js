"use client"
import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import PersonalDetailsSignup from "./PersonalDetailsSignup";
import Verification from "./Verification";
import TermsAndCondition from "./TermsAndCondition";

const Stepper = () => {
    const steps = ["Personal Detail", "Verification", "Login"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isStep1Valid =
        username.trim() !== "" &&
        password.trim() !== "" &&
        confirmPassword.trim() !== "" &&
        isValidEmail(email);

    const invalidPass =
        password === confirmPassword

    let stepContent;

    switch (currentStep) {
        case 1:
            stepContent = (
                <PersonalDetailsSignup
                    username={username}
                    password={password}
                    confirmPassword={confirmPassword}
                    email={email}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setConfirmPassword={setConfirmPassword}
                    setEmail={setEmail}
                    isValidEmail={isValidEmail}
                />
            );
            break;
        case 2:
            stepContent = (
                <Verification />
            )
            break;
        case 3:
            stepContent = (
                <TermsAndCondition/>
            )
        // Add more cases for other steps if needed

        default:
            break;
    }

    return (
        <>
            <div className="flex justify-between ">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                    >
                        <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                        <p className="text-gray-500">{step}</p>
                    </div>
                ))}
            </div>
            <div className="step-content mt-10">{stepContent}</div>
            <div className="flex justify-between mt-4">
                {currentStep > 1 && (
                    <button
                        className="rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1  "
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                    >
                        Back
                    </button>
                )}
                {!complete && (
                    //     <div className={`flex justify-between  w-full  ${currentStep === 1 ? "justify-end" : " w-full flex justify-end"}`}>
                    //     <button
                    //     className={`rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1.5   ${currentStep === steps.length ? "rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1.5" : ""}`}
                    //     onClick={() => {
                    //       if (currentStep === 1 && !isStep1Valid) {
                    //         alert("Username, password, and email are mandatory.");
                    //         return;
                    //       }
                    //       if (currentStep === 1 && password === confirmPassword) {
                    //         alert("Password not matched")

                    //       }

                    //       currentStep === steps.length
                    //         ? setComplete(true)
                    //         : setCurrentStep((prev) => prev + 1);
                    //     }}
                    //   >

                    //         {currentStep === steps.length ? "LogIn" : "Next"}
                    //     </button>
                    //   </div>
                    <div className={`flex justify-between  ${currentStep === 1 ? "w-full  flex justify-end" : "w-full flex justify-end"}`}>
                        {currentStep < steps.length ? (
                            <button
                                className={`rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1.5   ${currentStep === steps.length ? "rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1.5" : ""}`}
                                onClick={() => {
                                    if (currentStep === 1 && !isStep1Valid) {
                                        alert("Username, password, and email are mandatory.");
                                        return;
                                    }
                                    if (currentStep === 1 && password != confirmPassword) {
                                        alert("Password not matched")
                                    }
                                    setCurrentStep((prev) => prev + 1);
                                }}
                            >
                                Next
                            </button>
                        ) : (
                            <a href="/" 
                                className="rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1.5 "
                                onClick={() => {
                                    if (currentStep === 1 && !isStep1Valid) {
                                        alert("Username, password, and email are mandatory.");
                                        return;
                                    }
                                    setComplete(true);
                                }}
                                
                            >Signup</a>
                            
                        )}
                    </div>
                )}

            </div>
            
        </>
    );
};

export default Stepper;
