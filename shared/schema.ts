import { z } from "zod";

export const patientSchema = z.object({
  id: z.string(),
  patientName: z.string().min(1, "Patient name is required"),
  medicineName: z.string().min(1, "Medicine name is required"),
  dosage: z.number().min(1, "Dosage is required"),
  alarmTime: z.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/, "Invalid time format"),
  color: z.string(),
  medicinePhoto: z.string().optional() // base64 string
});

export type Patient = z.infer<typeof patientSchema>;
