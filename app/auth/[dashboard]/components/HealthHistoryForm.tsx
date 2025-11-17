"use client";
import React, { useState } from "react";
import {
  UserIcon,
  ScaleIcon,
  RulerIcon,
  DropletIcon,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

interface HealthHistoryFormProps {
  onSubmit: (data: any) => void;
}

export function HealthHistoryForm({ onSubmit }: HealthHistoryFormProps) {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    bloodType: "",
    sleepHours: "",
    waterLitres: "",
  });

  const [loading, setLoading] = useState(false);
  // const baseUrl: string = process.env.NEXT_PUBLIC_API_URL || "/api";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.age ||
      !formData.weight ||
      !formData.height ||
      !formData.bloodType ||
      !formData.sleepHours ||
      !formData.waterLitres
    ) {
      return toast.error("Please fill all fields");
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `/api/health`,
        { ...formData },
      
      );

      if (response.status === 200) {
        toast.success("Successfully Updated");
        onSubmit(response.data.data);
        setFormData({
          age: "",
          weight: "",
          height: "",
          bloodType: "",
          sleepHours: "",
          waterLitres: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message || "Request failed");
      } else {
        toast.error(`Error: ${error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Health History Form</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <div className="relative">
              <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Weight"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
            <div className="relative">
              <RulerIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Height"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sleep Hours</label>
            <div className="relative">
              <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="sleepHours"
                value={formData.sleepHours}
                onChange={handleChange}
                placeholder="Sleep Hours"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Water Litres</label>
            <div className="relative">
              <RulerIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="waterLitres"
                value={formData.waterLitres}
                onChange={handleChange}
                placeholder="Water Litres"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
          <div className="relative">
            <DropletIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            >
              <option value="">Please Select One</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {loading ? "Loading ..." : "Submit Health Information"}
        </button>
      </form>
    </div>
  );
}
