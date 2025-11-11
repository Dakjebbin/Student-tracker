import mongoose, { Document } from "mongoose";

interface IHealth extends Document {
    userId: string;
    age: number;
    weight?: string;
    height?: string;
    bloodType: string;
    sleepHours: number;
    waterLitres?: number;
    conditions: string[];
    createdAt: Date;
    updatedAt: Date;
} 

const HealthSchema = new mongoose.Schema<IHealth>({
    userId: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    bloodType: { type: String },
    conditions: { type: [String], default: [] },
    sleepHours: { type: Number },
    waterLitres: { type: Number },
    weight: {type:String},
    height: {type:String}
},{
    timestamps: true
})

const Health = mongoose.models.Health || mongoose.model<IHealth>("Health", HealthSchema);

export default Health