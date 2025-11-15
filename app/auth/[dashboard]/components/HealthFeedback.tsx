"use client";
import React from "react";

interface Props {
  healthData: {
    age: string;
    weight: string;
    height: string;
    bloodType: string;
    sleepHours: string;
    waterLitres: string;
  };
}

export function HealthFeedback({ healthData }: Props) {
  const { weight, height, sleepHours, waterLitres } = healthData;

  const bmi =
    Number(weight) && Number(height)
      ? (Number(weight) / Math.pow(Number(height) / 100, 2)).toFixed(1)
      : "N/A";

  const feedback =
    bmi === "N/A"
      ? "Please provide valid data for BMI calculation."
      : Number(bmi) < 18.5
      ? "You are underweight — consider a balanced diet with more calories."
      : Number(bmi) < 25
      ? "You have a healthy weight — keep maintaining your habits!"
      : Number(bmi) < 30
      ? "You are overweight — consider increasing activity and monitoring calories."
      : "You are obese — talk to a doctor or nutritionist for guidance.";

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Health Feedback</h3>

      <div className="space-y-3">
        <p>
          <strong>BMI:</strong> {bmi}
        </p>
        <p>
          <strong>Feedback:</strong> {feedback}
        </p>
        <p>
          <strong>Sleep:</strong>{" "}
          {Number(sleepHours) < 7
            ? "Try to sleep at least 7-8 hours per night."
            : "Great! You’re getting enough rest."}
        </p>
        <p>
          <strong>Water Intake:</strong>{" "}
          {Number(waterLitres) < 2
            ? "Drink at least 2–3 litres of water daily."
            : "Excellent hydration!"}
        </p>
      </div>
    </div>
  );
}
